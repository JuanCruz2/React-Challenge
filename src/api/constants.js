const apiBase = "https://gateway.marvel.com"
const publicKey = "1c8f47391f3bc27ebef0921a1c18757b"
const hash = "6c2b86e5a41feb534bc04e6aef02a44f"
const authorizedParams = `ts=1&apikey=${publicKey}&hash=${hash}`

export const GET_CHARACTERS_LIST = `${apiBase}/v1/public/characters?${authorizedParams}&limit=100`
export const GET_CHARACTERS_LIST_BY_NAME = (name) => `${apiBase}/v1/public/characters?${authorizedParams}&nameStartsWith=${name}&limit=100`
export const GET_COMICS_LIST_BY_NAME = (name) => `${apiBase}/v1/public/comics?${authorizedParams}&titleStartsWith=${name}&limit=100`
