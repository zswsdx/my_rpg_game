import { Asset, assetManager } from "cc";

export class ResourceManager {

    async loadRes(bundleName: string, path: string, assertType: any) {
        assetManager.loadBundle(bundleName, (err, bundle) => {
            if (err) {
                console.log(err)
                return
            }
            bundle.load(path, assertType, (err, assertType) => {
                if (err) {
                    console.log(err)
                    return
                }
            })
        });
    }


}