// DraggableTopBar.tsx
import { CloseAppButton } from './Buttons';

export const DraggableTopBar = () => {
  return (
    <header className="inset-0 h-8 dark:bg-main-dark-bg" style={{zIndex: '1000' , borderBottom:'1px solid rgba(240,240,240,0.5)', height:'33px', marginTop:'-2px'}}>
      <div className=" flex justify-between w-full">
        <div className="flex items-center justify-start text-white border-1 px-2 py-1">
          Mark Dinglasa
        </div>
        <div className="flex items-center justify-end">
          <CloseAppButton />
        </div>
      </div>
    </header>
  );
};


