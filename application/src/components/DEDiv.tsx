import React, { HTMLAttributes, useRef, useId, useState, useEffect } from "react";
import Draggable, { DraggableEvent } from "react-draggable";
import { UndoRedoElement, useUndoRedo } from "@/context/undoRedo";
import { drag } from "@/utils";
import ContextMenu from "./ContextMenu";

interface DEDivProps extends HTMLAttributes<HTMLDivElement> {
  fontSize?: number
  disabledrag?: boolean
  disableContextMenu?: boolean
  isUnderTransform?:boolean
}

const DragEditDiv: React.FC<DEDivProps> = ({
  children,
  ...props
}: DEDivProps) => {
  const divRef = useRef({} as HTMLDivElement);
  const id = useId();
  const { addUndo } = useUndoRedo();
  const [undoRedoElement, setElement] = useState({} as UndoRedoElement);
  const [disabled, setDisabled] = useState(props.disabledrag || false);
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });
  const [fontSize, setFontSize] = useState(props.fontSize || 16);
  const [showMenu, setShowMenu] = useState(false);
  

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
    }, true)
  };
  const onFocus = () => {
    setDisabled(true)
  }
  const onBlur = () => {
    setDisabled(false)
  }

  function handleContextMenu(e: React.MouseEvent) {
    if (props.disableContextMenu) return;
    console.log("contextmenu")
    e.preventDefault();
    setShowMenu(true);
    
    setMenuPos({
      x: e.clientX,
      y: e.clientY,
    });
  }
  function changeFontSize(e: React.ChangeEvent) {
    setFontSize(+(e.target as HTMLInputElement).value)
    // const element = divRef.current;
    setElement({
      ...undoRedoElement,
      from: {
        fx: setFontSize,
        args: [fontSize],
      },
      to: {
        fx: setFontSize,
        args: [+(e.target as HTMLInputElement).value]
      }
    });
    addUndo({
      ...undoRedoElement,
      from: {
        fx: setFontSize,
        args: [fontSize],
      },
      to: {
        fx: setFontSize,
        args: [+(e.target as HTMLInputElement).value]
      }
    }, true);
  }
  return (
    <>
      {divRef.current && (
        <Draggable disabled={disabled} onStart={handleDragStart} onStop={handleDragEnd}>
          <div
            id={id}
            ref={divRef}
            contentEditable
            suppressContentEditableWarning
            onFocus={onFocus}
            onBlur={onBlur}
            style={{fontSize: `${fontSize}px`}}
            onContextMenu={handleContextMenu}
            data-name='drageditdiv'
            {...props }
          >
            {children}
          </div>
        </Draggable>
      )}

          <ContextMenu props={{...menuPos, show: showMenu, setShowMenu:setShowMenu, underTransform: props.isUnderTransform}}>
            <div className="text-sm flex gap-2 justify-start items-center">
              Font size:
              <input className="p-2 rounded-md shadow border w-24" value={fontSize} max={100} min={0} type="number" onChange={changeFontSize}/>
            </div>
          </ContextMenu>

    </>
  );
};

export default DragEditDiv;