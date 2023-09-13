import celeryIcon from '../icons/celeryAllergensIcon.png'
import crustaceansIcon from '../icons/crustaceansAllergensIcon.png'
import dairyIcon from '../icons/dairyAllergensIcon.png'
import eggsIcon from '../icons/eggsAllergensIcon.png'
import fishIcon from '../icons/fishAllergensIcon.png'
import glutenIcon from '../icons/glutenAllergensIcon.png'
import lupinsIcon from '../icons/lupinsAllergensIcon.png'
import mollusksIcon from '../icons/mollusksAllergensIcon.png'
import mustardIcon from '../icons/mustardAllergensIcon.png'
import nutsIcon from '../icons/nutsinshellAllergensIcon.png'
import peanutsIcon from '../icons/peanutsAllergensIcon.png'
import sesameIcon from '../icons/sesameAllergensIcon.png'
import soyIcon from '../icons/soyAllergensIcon.png'
import sulphitesIcon from '../icons/sulfitesAllergensIcon.png'

export const allergiesOptions = [
  'Celery',
  'Crustaceans',
  'Dairy',
  'Eggs',
  'Fish',
  'Gluten',
  'Lupins',
  'Mollusks',
  'Mustard',
  'Nuts',
  'Peanuts',
  'Sesame',
  'Soy',
  'Sulphites',
]

export const difficultyOptions = ['Easy', 'Moderate', 'Difficult']

export const typeOptions = ['Salad', 'Dessert', 'Breakfast']

export const unityOptions = [
  'Liter',
  'Milliliters',
  'Kilograms',
  'Grams',
  'Pound',
  'Ounce',
  'Tablespoon',
  'Tablespoon dessert',
]

export const allergyIcons: Record<string, string> = {
  Celery: celeryIcon,
  Crustaceans: crustaceansIcon,
  Dairy: dairyIcon,
  Eggs: eggsIcon,
  Fish: fishIcon,
  Gluten: glutenIcon,
  Lupins: lupinsIcon,
  Mollusks: mollusksIcon,
  Mustard: mustardIcon,
  Nuts: nutsIcon,
  Peanuts: peanutsIcon,
  Sesame: sesameIcon,
  Soy: soyIcon,
  Sulphites: sulphitesIcon,
}
