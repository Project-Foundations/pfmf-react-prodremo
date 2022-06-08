import { FC } from 'react';

type IndexNavProps = {
  onNew: () => void;
};

export const IndexNav: FC<IndexNavProps> = ({ onNew }): JSX.Element => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <ul className="flex flex-row-reverse items-center">
          <li>
            <button onClick={onNew}>
              New
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
