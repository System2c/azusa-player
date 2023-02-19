import { setLocalStorage, readLocalStorage, storageCleanup } from '../../objects/Storage';
import updater1118 from './1.1.1.8';
import updater1119 from './1.1.1.9';

export const getVersion = () => {
    return chrome.runtime.getManifest().version;
}

/**
 * a version updater in case there are any breaking changes.
 * unfortunately, my breaking changes actually breaks myself...
 */
export default async () => {
    let settingsVersion = await readLocalStorage('nox-version');
    const currentVersion = getVersion();
    if (settingsVersion === undefined) settingsVersion = 0;
    switch (settingsVersion) {
        case (0):
        case ('1.1.1.8'):
            updater1118();
        case ('1.1.1.9'):
            updater1119();
    }
    setLocalStorage('nox-version', currentVersion);
}