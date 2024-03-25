/*
 * @Description: 
 * @Version: 1.0.0
 * @Author: Chendh
 * @Date: 2021-07-27 12:41:12
 */
const CryptoJS = require('crypto-js')
// 4a8e2e7f234d4e5269ff66f23e1a065f

const ciphertext = "i4Ct4nqA5k4HLypHj2N + uc1adOBNaVoWGTBQCE9 + 203djGSYLTX2PN1Hkb++h7io4dDmDA3 / Itfjxwa9UrUzWc8yuH6z0UqUBULxGVXolUWUnLQs8naVzLA55L9KilwA0HtJbrfjLmvRbSG3WJTWh8pSjWoUGyMl3WVBqddMi6aI7hqN3PNWhnPjiPx + ii / bTG8G10kHCe6916K2xQWZJ16AtqFM4onUZh8SbE9tsA3hL8Pg1ToVnhrCmNpuHEKmAh2tgFIupNrRELIVvh9clud4Xnt / jistnpv5Q + xCZfFdn9aNTUZWIvJ / 0iuqP8PyoUqQFEgg43EhmoKv8DgBGTM0tIJimmNnNO3WuQJoGXyQ4EtFFxykthvGjLhTbvzPEwtT5fozX / 3cn9lL3yw48QpWanwUyh9cNqf6BVJFGgKkPZbhJqmz8ioDRogrL7NJzrPWPNqqVTScvj + /NV2WxrTb0Y90QX6n8f+fecCLY9tN6lApt+8qvpxPV9iJy+3MHji+ntjjMwXMDr9Lj92Pb4+ALGpglqsT2eMF9ZQaPuUrshwoyIgZO24NKo/7b / XB5avyb9m9znPsIBqD + FOBjKFSYPbOI15 / nrtDiG9B9XnOn41B29rACANGHUAk046ceZlsvM0KnRewotV1x5B7YE8b71OM / tPWK8nigkbt + cAdzoVveviq8Y5KUpAUzOVzNSGAtEWRMWei2ZE5zVNpns4ACpAvTIp0y + F9TnVBmOggpfmikpYLvyL2Jwzd18zg8hF / 6uwkn8sjIzpa5pV8DaDnIJFzzJsg5KDP / AU9QhVdn9aNTUZWIvJ / 0iuqP8Py1RDU1Aj + hCCiBA6stY2pdXdIIvXKCZl0xJdsxqMO98lDuuqG1bpEwyRNWnLynVBZhRBz3OAJNj29ppRiBGLxJ4R / jyYyFNh3 + 1yCvddTGBeePGfKhgzuGSKHO1Fof8kOAMm0vqxAYpvS + gP4IDPnQF6AtqFM4onUZh8SbE9tsA1rPcb8diEflf06VEZ1RmDTAf5EOb3NUoETTiT5R92SYi3GYO7044fCS8Rq8NQ6yKML4psZ3bSPz9BJUvsBUpaxzCbQu / f9 + jnV4vFQVaSZwonmfp + SLVqDCkE6THk3P4rHsds5 + 7GhcFlt / tvltS5XraowSpFiHIDcP8uCF1kJy38 / Jcynb77zQD2uvuvaB8U67QB7HjgCu6ZSH73igi5iMT2tgJBh7xlTXjcD / oTkXjuH1FqEadUNNeyYgS8OHkLIkslUHazx2o4LB7uAB9TYfj + oWnI09nckDPNIpsibTs3bxbTcNodhXihDJRHEKlH6HwwLg6or0xTOjxnGYhKFqqDsT0Ec8200rVoGUXPL1kmzsIr / CFXf2nDqKO790bgY1YSGyl8Ue9 / pqHdcPBs04qKvlV4Lix2 / BQ0e + fH9K / 1MyMmFxKQW8O4RrLzbzizc / HBeWBYtgKHp62X7OKK1qlS + 7q / 4nZq3XqfpfbJxPQmFl / ZIeHklgmAjpc2TxPlAamjpAVbwcogfuYU3oPi74B50dke1LmvBD / LOpszczx7N4o7q0pS + ZfjhWs + GrvwFBm5TD4Z4PlwVDHjZXLpnL9WZB / cn5yS8ReiMZbjlbKQX9Z2VdvtFkm88cUzacyPbnjdbSCerwL94M + B5qehcbJ5fqY8UDOtB12d22UxiUpd0ZVwTImfyIliOpzANetACsMfBOZG / ecMASbx3veHMP1rhBhocoVxeas3JkuyrTLp5Avtz6n9dUg7pqh1UqVcB4ZAHfkL97JfhLtB5Zo68m02JUay / E + JmG2yzycsX4B7N4o7q0pS + ZfjhWs + GrvxYjifxltCyzZ + YB7UvDShFcsGxOi2qKcso8m + HmeZnjodmBvp8IAVR + Zo5jZfq1KNRRmEtaBxwVxOHudH3A3dn / GbiYitl333daHm8YPoMFmI2JhLg68E6BKsYFiR2nbYdy9HsQ2DFWyWGGvOFdMeWT0R0CrrVLDhN8Awx7OpZlSUNmsVznlW2mRjgkfiJ0ebBJVeA4BTxdZe7jB2vaAEx1s / we4C8dyDFR / EaGlTM3ZAfAYviQjXvUEH / Lt4sKzbuUb + AqNE + uOh49jS9tg5Gc6SCWg6nvvUYLLrAwUKapodoVqeYQWWn + 46ZpUCEH0XoBcAjHL6oxQYTnrzMq3RdmG6sxAfTuSFUX8Z2RBLKH7iYI3jarITppFRt + tGPG730lxw6cjUOFOEbohQ5eTu59qgTkjR7cwbik0XXLKXFyp1e / COOKpJL141dEO7o6 + 0 / bcZEqf0fye1KEJO + BMqzi3GvtMbl2MJs4Exa7D + RwmcxN6sFoZev7SbG0OhnUlnWz / B7gLx3IMVH8RoaVMzdSKJ9UkseCLxh2et8zYXKBN2MZJgtNfY83UeRv76HuKjbpVGxYgMK5EwDgdApBdsEfs7Sd5ENke + lZVtjihZIkHRJyhvUotzpVnbfEd4vpPzM + WX5hsXqG5n7o / pegic + 7qy9um9MEVzaBux0WGEvGc6MTSbXb51xLmUbcVgTYU8 + cZ4FsGObw5UTyQ8KWcpIbDWNAi87drf4muTGC5p3fAGMQnEWD0WUGC67LIa9CDOyzJZ08UL3hpKP + E2T8MmKFgjRfrIvNv2NeIi9DKRsr8J6Fi7CVMU3A6COd2MGUV7y + jPMeiWK0uGUObOWqm2vHclH7cRzlispE / gc2UgfisVW8DS3kYwopJxi0nk7f8J9hEbNbL2kh6qsty9mqyiJ"
// var bytes = CryptoJS.AES.decrypt(JSON.stringify(ciphertext.replace(/[\n]/g, '')), '4a8e2e7f234d4e5269ff66f23e1a065f');
// var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))

let encData = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(ciphertext.replace(/[\n]/g, '')))
let decData = CryptoJS.enc.Base64.parse(encData).toString(CryptoJS.enc.Utf8)
let decJson = CryptoJS.AES.decrypt(decData, 'aes').toString(CryptoJS.enc.Utf8)

console.log("originalText", JSON.parse(decJson))