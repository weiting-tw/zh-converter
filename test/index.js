const fs = require('fs');
const convert = require('../zh-converter');
const expect = require('chai').expect;

describe('test - convert', () => {
  process.chdir('./test');
  it('convert to traditional chinese', done => {
    convert.convertFile('./test2TW.json', true).then(() => {
      expect(fs.readFileSync('./test2TW.json', 'utf-8')).to.equal('{\n  "text": "我有一隻小毛驢，我從來也不騎，有一天我心血來潮騎著去趕集，我手裡拿著小皮鞭我心裡真得意，不知怎麼譁啦啦啦我摔了一身泥"\n}');
    }).catch((err) => {
      done();
    }).catch(done);
  });

  it('convert to simplified chinese', done => {
    convert.convertFile('./test2CN.json', false).then(() => {
      expect(fs.readFileSync('./test2CN.json', 'utf-8')).to.equal('{\n  "text": "我有一只小毛驢，我從來也不騎，有一天我心血來潮騎著去趕集，我手裡拿著小皮鞭我心裡真得意，不知怎麼譁啦啦啦我摔了一身泥"\n}');
    }).catch((err) => {
      done();
    }).catch(done);
  });
});

describe('test - try/catch', () => {
  it('test not exist', () => {
    expect(fs.existsSync('./folder')).to.be.false;
    convert.convertFile('./folder', true, err => {
      expect(err).to.equal(`./folder be converted fail !`);
    });
  });
});

describe('test - run', () => {
  it('convert files in folder, not set filter parameter', () => {
    convert.run(process);
    setTimeout(() => {
      expect(fs.readFileSync('./test2TW.json', 'utf-8')).to.equal('{\n  "text": "我有一隻小毛驢，我從來也不騎，有一天我心血來潮騎著去趕集，我手裡拿著小皮鞭我心裡真得意，不知怎麼譁啦啦啦我摔了一身泥"\n}');
    }, 1000);
  });

  it('convert files in folder, not set filter parameter', () => {
    convert.run(process, true, '.json');
    setTimeout(() => {
      expect(fs.readFileSync('./test2TW.json', 'utf-8')).to.equal('{\n  "text": "我有一隻小毛驢，我從來也不騎，有一天我心血來潮騎著去趕集，我手裡拿著小皮鞭我心裡真得意，不知怎麼譁啦啦啦我摔了一身泥"\n}');
    }, 1000);
  });
});
