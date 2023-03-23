export function arrayEquals(a: any[], b: any[]) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

export function drag(elementId:string, translate:string) {
    let el = document.getElementById(elementId);
    if (!el) return;
    el.style.transform = translate;
}