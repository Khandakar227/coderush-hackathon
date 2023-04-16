import React, { HTMLAttributes, useRef, useId, useState } from "react";
import Draggable, { DraggableEvent } from "react-draggable";
import { UndoRedoElement, useUndoRedo } from "@/context/undoRedo";
import { drag } from "@/utils";

interface DEDivProps extends HTMLAttributes<HTMLDivElement> {}

const DragEditDiv: React.FC<DEDivProps> = ({
  children,
  ...props
}: DEDivProps) => {
  const divRef = useRef({} as HTMLDivElement);
  const id = useId();
  const { addUndo } = useUndoRedo();
  const [undoRedoElement, setElement] = useState({} as UndoRedoElement);

  const handleDragStart = (e: DraggableEvent) => {
    const element = divRef.current;

    setElement({
      ...undoRedoElement,
      from: {
        fx: drag,
        args: [element.id, element.style.transform],
      },
    });
  };

  const handleDragEnd = (e: DraggableEvent) => {
    const element = divRef.current;

    setElement({
      ...undoRedoElement,
      to: {fx: drag, args: [element.id, element.style.transform]}
    });
    
    addUndo({
      ...undoRedoElement,
      to: {fx: drag, args: [element.id, element.style.transform]}
    })
  };
  return (
    <>
      {divRef.current && (
        <Draggable onStart={handleDragStart} onStop={handleDragEnd}>
          <div
            id={id}
            ref={divRef}
            contentEditable
            suppressContentEditableWarning
            {...props}
          >
            {children}
          </div>
        </Draggable>
      )}
    </>
  );
};

export default DragEditDiv;