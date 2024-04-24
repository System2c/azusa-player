import { getPlayerSetting } from '@utils/ChromeStorage';
import { buttonStyle, ScrollBar } from '@hooks/useTheme';
import AzusaTheme from './skins/azusa';
import ItsukiTheme from './skins/itsuki';
import NoxTheme from './skins/nox';
import ClessSTheme from './skins/clesss';
import AmeliaTheme from './skins/amelia';
import GuraTheme from './skins/gura';
import PomeloTheme from './skins/pomelo';
import HeraKrisTheme from './skins/heraKris';
import RinaHayashiTheme from './skins/rinahayashi';
import TaojiTheme from './skins/taojiovo';
import SteriaTheme from './skins/steria';
import AriaTheme from './skins/aria';
import NoirTheme from './skins/noir';
import RyniaTheme from './skins/rynia';
import NiyaTheme from './skins/nyiaibu';
import LumiTheme from './skins/lumi';
import KeroroTheme from './skins/keroro';

// needs to enable top-level await; necessary for other modules to import current skin config
const setting = await getPlayerSetting();
// http://192.168.50.1:19527/getimg?imgserve=itsuki&file=herabanner.png
export const SkinKeys = [
  '诺莺nox',
  '阿梓azusa',
  '星谷樹itsuki',
  'clessS',
  'Amelia Watson',
  'Gawr Gura',
  'Pokemon安妮',
  '赫拉Kris',
  '林莉奈RinaHayashi',
  '薇Steria',
  '桃几OvO',
  '阿蕊娅Aria',
  '黑泽诺亚NOIR',
  '莱妮娅Rynia',
  '阿布',
  '露米Lumi',
  '蛙吹Keroro',
];

export const skins = (key = setting.skin) => {
  const getSkin = () => {
    /**
     * skin requires:
     * player banner (~2000*80)
     * mobile player banner (~600*400)
     * gif icon (60*60)
     * various color themes
     *
     */
    if (!key) {
      key = '诺莺nox';
    }
    switch (key) {
      case 'clessS':
        return ClessSTheme();
      case '诺莺nox':
        return NoxTheme();
      case '星谷樹itsuki':
        return ItsukiTheme();
      case 'Amelia Watson':
        return AmeliaTheme();
      case 'Gawr Gura':
        return GuraTheme();
      case 'Pokemon安妮':
        return PomeloTheme();
      case '赫拉Kris':
        return HeraKrisTheme();
      case '林莉奈RinaHayashi':
        return RinaHayashiTheme();
      case '薇Steria':
        return SteriaTheme();
      case '桃几OvO':
        return TaojiTheme();
      case '阿蕊娅Aria':
        return AriaTheme();
      case '黑泽诺亚NOIR':
        return NoirTheme();
      case '莱妮娅Rynia':
        return RyniaTheme();
      case '阿布':
        return NiyaTheme();
      case '露米Lumi':
        return LumiTheme();
      case '蛙吹Keroro':
        return KeroroTheme();
      default:
        // default is azusa skin.
        return AzusaTheme();
    }
  };
  const playerStyle = getSkin();
  return {
    ...playerStyle,
    outerLayerBtn: { padding: 'unset' },
    CRUDBtn: {
      ':hover': {
        cursor: 'default',
      },
      paddingLeft: '8px',
      paddingRight: '8px',
    },

    CRUDIcon: {
      ':hover': {
        cursor: 'pointer',
      },
      width: '1.1em',
      height: '1.1em',
      paddingBottom: '2px',
      color: playerStyle.colorTheme.playListIconColor,
    },

    AddFavIcon: {
      ':hover': {
        cursor: 'pointer',
      },
      width: '1em',
      color: playerStyle.colorTheme.playListIconColor,
    },

    DiskIcon: {
      minWidth: '36px',
    },
    buttonStyle: buttonStyle(
      playerStyle.reactJKPlayerTheme.sliderColor,
      playerStyle.desktopTheme,
    ),
    ScrollBar: ScrollBar(playerStyle.colorTheme.scrollbarColor),
  };
};

export const skinPreset = skins();
