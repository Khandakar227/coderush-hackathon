import { arrayEquals } from "@/utils";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface UndoRedoELement {
  fx: Function;
  args: any[];
}

export interface UndoRedoProps {
  canUndo: boolean;
  canRedo: boolean;
  undoStack: UndoRedoELement[];
  redoStack: UndoRedoELement[];
  setCanUndo: Dispatch<SetStateAction<boolean>>;
  setCanRedo: Dispatch<SetStateAction<boolean>>;
  addUndo: (element: UndoRedoELement) => void;
  addRedo: (element: UndoRedoELement) => void;
  undo: () => void;
  redo: () => void;
}

const undoRedoContext = createContext({} as UndoRedoProps);

export const useUndoRedo = () => {
  return useContext(undoRedoContext);
};

export default function UndoRedoProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const [undoStack, setUndoStack] = useState([] as UndoRedoELement[]);
  const [redoStack, setRedoStack] = useState([] as UndoRedoELement[]);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const addUndo = (element: UndoRedoELement) => {
    setUndoStack((stk) => {
      if (
        stk.length &&
        stk[stk.length - 1].fx.toString() === element.fx.toString() &&
        arrayEquals(stk[stk.length - 1].args, element.args)
        )
        return stk;

      stk.push(element);
      return stk;
    });
        
    // if (redoStack.length) setCanRedo(true);
    // else setCanRedo(false);
    // if (undoStack.length) setCanUndo(true);
    // else setCanUndo(false);

    console.log("addUndo: ", undoStack);
  };

  const addRedo = (element: UndoRedoELement) => {
    setRedoStack((stk) => {
      if (
        stk.length &&
        stk[stk.length - 1].fx.toString() === element.fx.toString() &&
        arrayEquals(stk[stk.length - 1].args, element.args)
        )
        return stk;

      stk.push(element);
      return stk;
    });
    
    // if (redoStack.length) setCanRedo(true);
    // else setCanRedo(false);
    // if (undoStack.length) setCanUndo(true);
    // else setCanUndo(false);
    
    console.log("addRedo: ", redoStack);
  };

  const undo = () => {
    // Defining a variable to hold the top most element
    let element: UndoRedoELement | undefined;
    setUndoStack((stk) => {
      // Remove the top element from the stack and return it
      element = stk.pop();
      // Return the modified stack
      return stk;
    });
    // If there is no element then simply return
    if (element == undefined) return;
    // Run the saved function with the given args
    element.fx(...element.args);
    
    addRedo(element);
  };

  const redo = () => {
    let element: UndoRedoELement | undefined;

    setRedoStack((stk) => {
      element = stk.pop();
      return stk;
    });

    if (element == undefined) return;
    element.fx(...element.args);

    addUndo(element);
  };

  return (
    <undoRedoContext.Provider
      value={{
        canUndo,
        canRedo,
        undoStack,
        redoStack,
        setCanUndo,
        setCanRedo,
        addUndo,
        addRedo,
        undo,
        redo,
      }}
    >
      {children}
    </undoRedoContext.Provider>
  );
}
