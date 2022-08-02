/* eslint-disable no-undef */
// @ts-ignore
// eslint-disable-next-line no-restricted-globals
self.importScripts("../libs/axios.min.js");

/* eslint-disable no-restricted-globals */
this.onmessage = async (/** @type MessageEvent */ $event) => {
    let result = null
    try {
        let output = await getOutput($event.data.url)
        console.log("worker try", output)
        result = {
            isError: false,
            value: output
        }
        // @ts-ignore
        this.postMessage(result);
    } catch (error) {
        result = {
            isError: true,
            value: error
        }
        // @ts-ignore
        this.postMessage(result);
    }
};


/**
 * @param {string} url
 * @returns {Promise<any>}
 */
async function getOutput(url) {
    // try {
    // @ts-ignore
    return axios.get(url, {
        transformResponse: (res) => {
            // Do your own parsing here if needed ie JSON.parse(res);
            return res;
        },
    })
        .then((/** @type import("axios").AxiosResponse */ res) => res.data)
        .catch((/** @type import("axios").AxiosError */ err) => err)
    // } catch (error) {
    //     return error
    // }
}

