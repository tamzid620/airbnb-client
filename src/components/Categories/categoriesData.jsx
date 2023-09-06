import { FaHotel } from "react-icons/fa6";
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi'
import { FaSkiing } from 'react-icons/fa'
import { BsSnow } from 'react-icons/bs'
import { IoDiamond } from 'react-icons/io5'
import { MdOutlineVilla } from 'react-icons/md'

export const categories = [
    {
      label: 'Rooms',
      icon: FaHotel,
      description: 'This property shows all rooms!',
    },
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!',
      },
      {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!',
      },
      {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is near a lake!',
      },
      {
        label: 'Pools',
        icon: TbPool,
        description: 'This is property has a beautiful pool!',
      },
      {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an island!',
      },
      {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property offers camping activities!',
      },
    
]
