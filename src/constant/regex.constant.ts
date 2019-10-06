export const REGEXP: Object={
  NAME: "/^[a-zA-ZÁ-Úá-úÀ-Ùà-ù']{3,30}$/",
  SURNAME: "/^[a-zA-ZÁ-Úá-úÀ-Ùà-ù']{2,255}$/",
  EMAIL: "/^[a-zA-ZÁ-Úá-úÀ-Ùà-ù']{3,255}@[a-zA-ZÁ-Úá-úÀ-Ùà-ù']{2,255}.[a-zA-ZÁ-Úá-úÀ-Ùà-ù']{2,10}$/",
  CPSPAIN: "/^((0[1-9])|([1-4]\d)|(5[0-2]))\d{3}$/",
  CPUSA: "/^\d{5}$/",
  PHONESPAIN: "/^(+34)?[6789]\d{8}$/",
  PHONEUSA: "/^(+1)?(425)\d{7}$/"
}