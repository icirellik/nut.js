import ln from "./libnut";

const libnut: typeof ln = (process.platform === 'win32') ?
    require("@potatoranch/libnut-win32") :
    (process.platform === 'linux') ?
        require("@potatoranch/libnut-linux") :
        require("@potatoranch/libnut-darwin")

export {
    libnut,
}
