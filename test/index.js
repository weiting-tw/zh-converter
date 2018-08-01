const should = require('should');
const fs = require('fs');
const convert = require('../zh-converter');

describe('#convert', () => {
  process.chdir('./test');
  it('convert to traditional chinese', done => {
    convert.convertFile('./test2TW.json', true).then(() => {
      should.equal(fs.readFileSync('./test2TW.json', 'utf-8'), '{\n  "text": "我有一隻小毛驢，我從來也不騎，有一天我心血來潮騎著去趕集，我手裡拿著小皮鞭我心裡真得意，不知怎麼譁啦啦啦我摔了一身泥"\n}');
    }).catch((err) => {
      done();
    }).catch(done);
  });

  it('convert to simplified chinese', done => {
    convert.convertFile('./test2CN.json', false).then(() => {
      should.equal(fs.readFileSync('./test2CN.json', 'utf-8'), '{\n  "text": "我有一只小毛驴，我从来也不骑，有一天我心血来潮骑着去赶集，我手里拿着小皮鞭我心里真得意，不知怎么哗啦啦啦我摔了一身泥"\n}');
    }).catch((err) => {
      done();
    }).catch(done);
  });
})
