export const AppFileWrapper = () => {
    return (
        <div className="relative w-[580px] h-[156px] border border-dashed border-app_gray rounded-sm grid cursor-pointer">
            <div className="grid items-center justify-items-center font-ttcommons text-app_gray text-s">
                Выберите фото или перетащите сюда
            </div>
            <input 
                type="file" 
                name="f"
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: 'pointer'
                  }}
                />
        </div>
    )
}