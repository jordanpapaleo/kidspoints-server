import AWS from 'aws-sdk'
import fs from 'fs'

export default class S3Bucket {
  static apiVersion = '2006-03-01'

  bucketName = ''
  s3 = null

  constructor (bucketName) {
    if (bucketName) {
      this.bucketName = bucketName
      this.s3 = new AWS.S3({
        Bucket: bucketName,
        apiVersion: this.apiVersion
      })
    }
  }

  // Creates a new S3 bucket
  createNewBucket (bucketName) {
    this.bucketName = bucketName

    return new Promise((resolve, reject) => {
      const s3 = new AWS.S3({apiVersion: this.apiVersion})
      s3.createBucket({Bucket: bucketName}, (err, data) => {
        if (err) {
          reject(err)
        } else {
          console.log(`Successfully created bucket: ${data}`)
          resolve(data)
        }
      })
    })
  }

  // Allows you to change buckets
  // This might be a real bad idea ;p
  loadBucket (bucketName) {
    this.bucketName = bucketName

    return new Promise((resolve, reject) => {
      this.s3 = new AWS.S3({
        Bucket: bucketName,
        apiVersion: this.apiVersion
      })

      resolve()
    })
  }

  listObjects () {
    const params = {
      Bucket: this.bucketName
    }

    return new Promise((resolve, reject) => {
      this.s3.listObjects(params, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data.Contents)
        }
      })
    })
  }

  uploadFile (key, body) {
    const params = {
      Bucket: this.bucket,
      Key: key,
      Body: JSON.stringify(body)
    }

    return new Promise((resolve, reject) => {
      if (!key || !this.s3) {
        console.log('No key || No Bucket')
        reject()
      }

      this.s3.putObject(params, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve({
            key,
            eTag: data.ETag
          })
        }
      })
    })
  }

  uploadDir () {
    // TODO
    const ignoredFiles = []
  }

  downloadFile (key) {
    const params = {
      Bucket: this.bucketName,
      Key: key
    }

    return new Promise((resolve, reject) => {
      this.s3.getObject(params, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data.Body.toString())
        }
      })
    })
  }

  downloadDir () {
    // TODO
  }

  deleteObject (key) {
    // TODO
    // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property
    // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObjects-property
  }

  deleteObjects () {
    // TODO
  }
}
