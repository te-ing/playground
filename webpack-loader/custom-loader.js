const path = require('path');

module.exports = function(source) {
  const fileName = path.basename(this.resourcePath);

  // 정규식을 사용하여 $LOADER_PATH_BASENAME 구문을 찾고 변환합니다.
  const result = source.replace(/\$LOADER_PATH_BASENAME/g, fileName);

  return result;
};