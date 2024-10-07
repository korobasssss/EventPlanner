import { FC } from "react"
import { OnePhoto } from "../OnePhoto/OnePhoto"

interface IPhotoGroup {
    photos: string[]
}

export const PhotoGroup: FC<IPhotoGroup>  = (
    {
        photos
    }
) => {
    return (
        <div className="relative flex">
            {photos[0] && (
                <OnePhoto 
                    photo={photos[0]}
                    classname="border border-app_white relative z-30"    
                />
            )}
            {photos[1] && (
                <OnePhoto 
                    photo={photos[0]}
                    classname="border border-app_white relative right-[25px] z-20"    
                />
            )}
            {photos[2] && (
                <OnePhoto 
                    photo={photos[0]}
                    classname="border border-app_white relative right-[50px] z-10"    
                />
            )}
        </div>
    )
}