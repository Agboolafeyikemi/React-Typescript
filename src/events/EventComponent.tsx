const EventComponent: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e", e);
  };
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("e", e);
  };
  return (
    <div>
      <input onChange={handleChange} />
      <div draggable onDragStart={handleDrag}>
        Drag me!
      </div>
    </div>
  );
};
export default EventComponent;
