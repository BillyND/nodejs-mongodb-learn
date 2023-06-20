const path = require("path")


const uploadSingleFile = async (fileObject) => {
    let uploadName = Date.now() + "-" + fileObject.name
    let uploadPath = path.join(__dirname, "../../public/fileUpLoad/" + "-" + uploadName)

    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(uploadPath);
        return {
            error: null,
            status: "success",
            path: uploadPath,
        }
    } catch (error) {
        return {
            error: JSON.stringify(error),
            status: "failed",
            path: null,
        }
    }
}


const uploadMultipleFile = async (fileArray) => {
    try {
        var resultArr = []
        var countSuccess = 0
        fileArray.forEach(async fileObject => {
            try {
                let uploadName = Date.now() + "-" + fileObject.name
                let uploadPath = path.resolve(__dirname, "../../public/fileUpLoad/" + uploadName)
                await fileObject.mv(uploadPath);

                resultArr.push({
                    error: null,
                    status: "success",
                    path: uploadPath
                })
                countSuccess = 200;
            } catch (error) {

            }
        });
        return {
            status: "success",
            countSuccess: countSuccess,
            resultArr: resultArr
        }
    } catch (error) {
        return {
            error: JSON.stringify(error),
            status: "failed",
            path: null,
        }
    }




}

module.exports = { uploadSingleFile, uploadMultipleFile }