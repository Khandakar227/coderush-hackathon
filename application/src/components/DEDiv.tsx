import React, { HTMLAttributes, useRef, useId } from "react";
import Draggable, { DraggableEvent } from "react-draggable";
import { useUndoRedo } from "@/context/undoRedo";
import { drag } from "@/utils";

interface DEDivProps extends HTMLAttributes<HTMLDivElement> {}

const DragEditDiv: React.FC<DEDivProps> = ({
  children,
  ...props
}: DEDivProps) => {
  const divRef = useRef({} as HTMLDivElement);
  const id = useId();
  const { undoStack, addUndo } = useUndoRedo();

  const handleDragStart = (e: DraggableEvent) => {
    const element = divRef.current;
    addUndo({fx: drag, args: [element.id, element.style.transform]})
  };

  return (
    <>
      {divRef.current && (
        <Draggable onStart={handleDragStart}>
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
