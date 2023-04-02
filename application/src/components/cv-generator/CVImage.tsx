import React, { useEffect, useRef, useState } from "react";
import ContextMenu from "../ContextMenu";

function CVImage() {
  const photoUploadRef = useRef({} as HTMLInputElement);
  const [displayPhoto, setDisplayPhoto] = useState("");
  const [borderRadius, setBR] = useState(0);
  const [aspectRatio, setAspectRatio] = useState("1");

  const [showMenu, setShowMenu] = useState(false);
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("click", () => setShowMenu(false));

    return document.removeEventListener("click", () => setShowMenu(false));
  }, []);

  function handleContextMenu(e: React.MouseEvent) {
    e.preventDefault();
    setShowMenu(true);
    setMenuPos({
      x: (100 * e.pageX) / window.innerWidth,
      y: (100 * e.pageY) / window.innerHeight,
    });
  }

/**
 * Need to add undo redo feature
*/
  function handleBRChange(e: React.ChangeEvent) {
    setBR(+(e.target as HTMLInputElement).value);
  }

/**
 * Need to add undo redo feature
*/
  function changeAspectRatio(ratio:string) {
    setAspectRatio(ratio);
  }
  
/**
 * Need to add undo redo feature
*/
  const upload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imgData = reader.result as string;
        setDisplayPhoto(imgData);
        //   localStorage.setItem(CVPhotoStorageName, JSON.stringify(imgData));
      };

      reader.readAsDataURL(file);
    }
  };

  const onImageClick = () => {
    photoUploadRef.current.click();
  };

  return (
    <div onContextMenu={handleContextMenu} className="relative">
      <img
        style={{ borderRadius: `${borderRadius}%`, aspectRatio: aspectRatio }}
        className="w-32 shadow"
        src={displayPhoto || "/assets/dp_temp.png"}
        onClick={onImageClick}
      />
      {showMenu ? (
        <ContextMenu props={menuPos}>
          <button className="text-sm w-full text-start py-1" onClick={onImageClick}>
            Change photo
          </button>
          <hr />
          <div className="text-xs w-full text-gray-800">Set border radius</div>
          <input
            type="range"
            max={100}
            min={0}
            defaultValue={0}
            value={borderRadius}
            onChange={handleBRChange}
          />
          <hr />
          <div className="text-xs w-full text-start py-1 text-gray-800">
            Change aspect ratio
          </div>
          <div className="flex gap-1 items-start justify-between">
            <button className="text-sm py-1" onClick={()=>changeAspectRatio("3/2")}> 3:2 </button>
            <button className="text-sm py-1" onClick={()=>changeAspectRatio("16/9")}> 16:9 </button>
            <button className="text-sm py-1" onClick={()=>changeAspectRatio("1/1")}> 1:1 </button>
          </div>
          <hr />
        </ContextMenu>
      ) : (
        ""
      )}
      <input
        type="file"
        accept="image/*"
        ref={photoUploadRef}
        onChange={upload}
        className="hidden"
      />
    </div>
  );
}

export default CVImage;
