// DraggableTopBar.tsx
import { CloseAppButton } from './Buttons';

export const DraggableTopBar = () => {
  return (
    <header className="absolute inset-0 h-8 bg-red" style={{ background: 'var(--primary)', borderBottom: '1px solid #e1e1e1'}}>
      <div className="px-2 py-1 flex justify-between w-full">
        <div className="flex items-center justify-start text-white border-1">
          innosoft
        </div>
        <div className="flex items-center justify-end">
          <CloseAppButton />
        </div>
      </div>
    </header>
  );
};


