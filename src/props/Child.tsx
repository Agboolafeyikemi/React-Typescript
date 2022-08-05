interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color} <button onClick={onClick}>Click ME</button>
    </div>
  );
};

export const ChildFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color} {children} <button onClick={onClick}>Click ME</button>
    </div>
  );
};
