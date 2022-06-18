export const clearSelectedObjects = (canvas: fabric.Canvas | null) => {
  if (canvas !== null) {
    const activeObjects = canvas.getActiveObjects();
    activeObjects.forEach((obj) => {
      canvas.remove(obj);
    });
  }
};
