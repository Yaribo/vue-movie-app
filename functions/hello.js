exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Yaribo',
      age: 38,
      email: 'yougnrykim@kakao.com'
    })
  }
}