import fs from 'fs'
import path from 'path'
import {promisify} from 'util'
// import rimraf from 'rimraf'
// import request from 'request'

const localDb = path.resolve(__dirname, '../data/db.json')

const fspReadFile = promisify(fs.readFile)

export async function getLocal () {
  console.log('getLocal')
  const data = await fspReadFile(localDb)
  const jsonData = JSON.parse(data.toString())
  return jsonData
}

// Creates the folder structure for a new property
// and copies the basic db file structure
// export function createNewLocalProperty (propertyId) {
//   return new Promise((resolve, reject) => {
//     const newDirs = [propertyId, 'captures', 'screenshots']
//     const newProperty = `${localProperties}/${propertyId}`
//
//     newDirs.forEach((dirName, i) => {
//       let newDirectory = (i === 0) ? newProperty : `${newProperty}/${dirName}`
//       fs.mkdirSync(newDirectory)
//     })
//
//     const writeStream = fs.createWriteStream(`${newProperty}/db.json`)
//     writeStream
//       .on('finish', error => {
//         if (error) {
//           reject(error)
//         } else {
//           resolve(propertyId)
//         }
//       })
//       .on('error', (error) => {
//         console.log(error)
//         reject(error)
//       })
//
//     fs.createReadStream(DEFAULT_DB)
//       .pipe(writeStream)
//   })
// }

// Read the local directory to get the local properties the app has access to


// export function getProperty (propertyId) {
//   const filePath = path.join(localProperties, `${propertyId}/db.json`)
//   return new Promise((resolve, reject) => {
//     constile(filePath, (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve({
//           id: propertyId,
//           ...JSON.parse(data.toString())
//         })
//       }
//     })
//   })
// }

// export function getImage (imagePath) {
//   const filePath = path.join(localProperties, imagePath)
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// export function saveProperty (propertyId, update) {
//   const filePath = path.join(localProperties, `${propertyId}/db.json`)
//   return new Promise((resolve, reject) => {
//     update.id = propertyId
//     const updatedProperty = JSON.stringify(update, null, 2)
//     fs.writeFile(filePath, updatedProperty, (err) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve()
//       }
//     })
//   })
// }

// export function deleteProperty (propertyId) {
//   const filePath = path.join(localProperties, propertyId)
//   return new Promise((resolve, reject) => {
//     rimraf(filePath, (err) => {
//       if (err) {
//         reject()
//       } else {
//         resolve()
//       }
//     })
//   })
// }

// export function deleteCapture (propertyId, fileName) {
//   const filePath = path.join(localProperties, `${propertyId}/captures/${fileName}`)
//   return new Promise((resolve, reject) => {
//     rimraf(filePath, (err) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve()
//       }
//     })
//   })
// }

// export function saveScreenshot (propertyId, screenshotId, uri) {
//   const split = uri.split(',')
//   const data = split[1]
//   const buffer = new Buffer(data, 'base64')
//   const extension = split[0].match(/^data:.+\/(.+);base64$/)[1]
//   const fileName = `${screenshotId.replace(/\s/g, '')}.${extension}`
//   const filePath = path.join(localProperties, `${propertyId}/screenshots/${fileName}`)
//
//   return new Promise((resolve, reject) => {
//     fs.writeFile(filePath, buffer, (err) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(fileName)
//       }
//     })
//   })
// }

// export function deleteScreenshot (propertyId, fileName) {
//   const filePath = path.join(localProperties, `${propertyId}/screenshots/${fileName}`)
//   return new Promise((resolve, reject) => {
//     rimraf(filePath, (err) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve()
//       }
//     })
//   })
// }

// export function getPropertyFileList (property) {
//   const {rooms, id} = property
//   const fileList = [`${id}/db.json`]
//
//   rooms.forEach((room) => {
//     const {captures, screenshots} = room
//     if (captures) {
//       captures.forEach((capture) => {
//         fileList.push(`${id}/captures/${capture.uri}`)
//       })
//     }
//
//     if (screenshots) {
//       screenshots.forEach((sscreenshot) => {
//         fileList.push(path.join(`${id}/screenshots/${sscreenshot.fileName}`))
//       })
//     }
//   })
//
//   return fileList
// }

// export function getPropertyFilePaths (fileList) {
//   return fileList.map(fileName => `${localProperties}/${fileName}`)
// }
