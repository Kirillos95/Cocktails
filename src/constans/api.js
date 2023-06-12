const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/' //создали переменную с АПИ
export const INGREDIENTS_URL = `${BASE_URL}list.php?i=list`
export const COCKTAILS_BY_INGR_URL = `${BASE_URL}filter.php?i=`

export const COCKTAIL_BY_ID = `${BASE_URL}lookup.php?i=`