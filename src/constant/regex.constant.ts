export default{
  NAME: new RegExp(/^[a-zA-ZÁ-Úá-úÀ-Ùà-ù']{3,255}$/),
  SURNAME: new RegExp(/^[a-zA-ZÁ-Úá-úÀ-Ùà-ù']{2,255}$/),
  EMAIL: new RegExp(/^[a-zA-ZÁ-Úá-úÀ-Ùà-ù']{3,255}@[a-zA-ZÁ-Úá-úÀ-Ùà-ù']{2,255}.[a-zA-ZÁ-Úá-úÀ-Ùà-ù']{2,10}$/i),
  CPSPAIN: new RegExp(/^((0[1-9])|([1-4]\d)|(5[0-2]))\d{3}$/),
  CPUSA: new RegExp(/^\d{5}(?:-\d{4})?$/),
  LANDLINEUSA: new RegExp(/^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/),
  LANDLINESPAIN: new RegExp(/^(\+34|0034|34)?[89]\d{8}$/),
  PHONENUMBERSPAIN: new RegExp( /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/),
  PHONENUMBERUSA: new RegExp(/^1\s?(?:(?:(?:\d{3}\s?\d{3}\s?)|(?:\d{3}-\d{3}-)|(?:\(\d{3}\)\s?\d{3}-))\d{4}$)|^\d{10}$/)
}