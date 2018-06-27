'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _LayoutSearch = require('../components/LayoutSearch');

var _LayoutSearch2 = _interopRequireDefault(_LayoutSearch);

var _routes = require('../routes');

var _shapeshift = require('shapeshift.io');

var _shapeshift2 = _interopRequireDefault(_shapeshift);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Dan\\Documents\\GitHub\\wallet\\crypto-wallet\\pages\\index.js?entry';
//import Campaign from '../ethereum/campaign';
//import axios from 'axios';

//var Promise = require('bluebird')
//var shapeshift = Promise.promisifyAll(require('shapeshift.io'))

// class based component

var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      errorMessage: '',
      conversion: '',
      pairs: ''
    }, _this.renderCampaigns = function (event) {
      event.preventDefault();

      _this.setState({ value: '', errorMessage: '', conversion: '' });

      /*
      const testy = shapeshift.coins((err, coinData) => {
        this.setState({ coinList: JSON.stringify(Object.values(coinData))});
        console.log(coinData);
      })
      */

      var pair = _this.state.input1 + "_" + _this.state.input2;

      _this.setState({ pairs: pair });

      var exchange = _shapeshift2.default.exchangeRate(pair, function (err, rate) {
        _this.setState({ value: rate });
        return rate; // => '158.71815287'
      });

      var reformat = " " + _this.state.input2 + " = 1 " + _this.state.input1;
      _this.setState({ conversion: reformat });

      //this.setState({ value: JSON.stringify(exchange) });


      return _react2.default.createElement(_semanticUiReact.Container, { content: exchange, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      });
      //["BTC","1ST","ANT","BNT","BCH","BTG","BLK","CVC","CLAM","DASH","DCR","DGB","DNT","DOGE","ETH","ETC","FCT","GAME","GNT","GUP","KMD","LBC","LSK","LTC","MAID","MONA","MSC","NEO","NBT","NMC","XEM","NMR","NVC","NXT","OMG","POT","PPC","QTUM","REP","RDD","RCN","RLC","SALT","SC","SNT","STORJ","START","STEEM","SWT","TRST","USDT","VOX","VRC","VTC","WINGS","XMR","XRP","ZEC","ZRX"]
    }, _this.handleDropdown = function (e, data) {
      _this.setState({ input1: data.value.toLowerCase() });
    }, _this.handleDropdown2 = function (e, data) {
      _this.setState({ input2: data.value.toLowerCase() });
    }, _this.convertCoins = function (event) {
      event.preventDefault();

      var withdrawalAddress = _this.state.input4;
      var pair = _this.state.pairs;
      var amount = _this.state.input5; // LTC amount that you want to receive to your LTC address

      // if something fails
      var options = {
        returnAddress: _this.state.input3,
        amount: _this.state.input5 // <---- must set amount here
      };

      _shapeshift2.default.shift(withdrawalAddress, pair, options, function (err, returnData) {
        // ShapeShift owned BTC address that you send your BTC to
        var depositAddress = returnData.deposit;

        // NOTE: `depositAmount`, `expiration`, and `quotedRate` are only returned if
        // you set `options.amount`

        // amount to send to ShapeShift (type string)
        var shiftAmount = returnData.depositAmount;

        // Time before rate expires (type number, time from epoch in seconds)
        var expiration = new Date(returnData.expiration * 1000);

        // rate of exchange, 1 BTC for ??? LTC (type string)
        var rate = returnData.quotedRate;

        // you need to actually then send your BTC to ShapeShift
        // you could use module `spend`: https://www.npmjs.com/package/spend
        // CONVERT AMOUNT TO SATOSHIS IF YOU USED `spend`
        // spend(SS_BTC_WIF, depositAddress, shiftAmountSatoshis, function (err, txId) { /.. ../ })

        // later, you can then check the deposit status
        console.log(err);

        _shapeshift2.default.status(depositAddress, function (err, status, data) {
          console.log(err);
          console.log(status); // => should be 'received' or 'complete'
        });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  //dynamically compute route for description tag below


  (0, _createClass3.default)(CampaignIndex, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_LayoutSearch2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('div', { style: { marginTop: '25px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 7, __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, 'Check Exchange Rate'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.renderCampaigns, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, 'From Coin 1'), _react2.default.createElement(_semanticUiReact.Dropdown, {
        placeholder: 'Starting Coin', search: true, selection: true,
        options: [{ "text": "Bitcoin", "key": "BTC", "value": "BTC" }, { "text": "DASH", "key": "DASH", "value": "DASH" }, { "text": "Ether", "key": "ETH", "value": "ETH" }, { "text": "Litecoin", "key": "LTC", "value": "LTC" }, { "text": "OmiseGo", "key": "OMG", "value": "OMG" }, { "text": "Monero", "key": "XMR", "value": "XMR" }, { "text": "Ripple", "key": "XRP", "value": "XRP" }, { "text": "ZCash", "key": "ZEC", "value": "ZEC" }],
        onChange: this.handleDropdown,
        defaultValue: this.state.input1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, 'To Coin 2'), _react2.default.createElement(_semanticUiReact.Dropdown, {
        placeholder: 'Desired Coin', search: true, selection: true,
        options: [{ "text": "Bitcoin", "key": "BTC", "value": "BTC" }, { "text": "DASH", "key": "DASH", "value": "DASH" }, { "text": "Ether", "key": "ETH", "value": "ETH" }, { "text": "Litecoin", "key": "LTC", "value": "LTC" }, { "text": "OmiseGo", "key": "OMG", "value": "OMG" }, { "text": "Monero", "key": "XMR", "value": "XMR" }, { "text": "Ripple", "key": "XRP", "value": "XRP" }, { "text": "ZCash", "key": "ZEC", "value": "ZEC" }],
        onChange: this.handleDropdown2,
        defaultValue: this.state.input2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, 'Get Rate!')), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, 'Exchange Rate: \u2002')), this.state.value, this.state.conversion), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement('div', { style: { marginLeft: '25px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }), _react2.default.createElement(_semanticUiReact.Icon, { name: 'angle double right', size: 'huge', __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 7, __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, 'Convert Coins'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.convertCoins, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, 'Coin 1 Wallet Address'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.input3,
        onChange: function onChange(event) {
          return _this2.setState({ input3: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, 'Coin 2 Wallet Address'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.input4,
        onChange: function onChange(event) {
          return _this2.setState({ input4: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, 'Amount to convert'), _react2.default.createElement(_semanticUiReact.Input, {
        label: this.state.input1,
        labelPosition: 'right',
        value: this.state.input5,
        onChange: function onChange(event) {
          return _this2.setState({ input5: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, 'Convert!')))))));
    }
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;

// Next also requires react component to be exported for each wep page file,
// as seen on line 17

//npm run dev => starts web app
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25JbmRleCIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwidmFsdWUiLCJpbnB1dDEiLCJpbnB1dDIiLCJpbnB1dDMiLCJpbnB1dDQiLCJpbnB1dDUiLCJlcnJvck1lc3NhZ2UiLCJjb252ZXJzaW9uIiwicGFpcnMiLCJyZW5kZXJDYW1wYWlnbnMiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJwYWlyIiwiZXhjaGFuZ2UiLCJleGNoYW5nZVJhdGUiLCJlcnIiLCJyYXRlIiwicmVmb3JtYXQiLCJjcmVhdGVFbGVtZW50IiwiY29udGVudCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiaGFuZGxlRHJvcGRvd24iLCJlIiwiZGF0YSIsInRvTG93ZXJDYXNlIiwiaGFuZGxlRHJvcGRvd24yIiwiY29udmVydENvaW5zIiwid2l0aGRyYXdhbEFkZHJlc3MiLCJhbW91bnQiLCJvcHRpb25zIiwicmV0dXJuQWRkcmVzcyIsInNoaWZ0IiwicmV0dXJuRGF0YSIsImRlcG9zaXRBZGRyZXNzIiwiZGVwb3NpdCIsInNoaWZ0QW1vdW50IiwiZGVwb3NpdEFtb3VudCIsImV4cGlyYXRpb24iLCJEYXRlIiwicXVvdGVkUmF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJrZXkiLCJyZW5kZXIiLCJfdGhpczIiLCJzdHlsZSIsIm1hcmdpblRvcCIsIlJvdyIsIkNvbHVtbiIsIndpZHRoIiwib25TdWJtaXQiLCJlcnJvciIsIkZpZWxkIiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJzZWxlY3Rpb24iLCJvbkNoYW5nZSIsImRlZmF1bHRWYWx1ZSIsImhlYWRlciIsInByaW1hcnkiLCJtYXJnaW5MZWZ0IiwibmFtZSIsInNpemUiLCJ0YXJnZXQiLCJsYWJlbCIsImxhYmVsUG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7OztBQVBBLElBQUlBLGVBQWUsaUZBQW5CO0FBS0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLElBQUlDLGdCQUFnQixVQUFVQyxVQUFWLEVBQXNCO0FBQ3hDLDBCQUFVRCxhQUFWLEVBQXlCQyxVQUF6Qjs7QUFFQSxXQUFTRCxhQUFULEdBQXlCO0FBQ3ZCLFFBQUlFLElBQUo7O0FBRUEsUUFBSUMsS0FBSixFQUFXQyxLQUFYLEVBQWtCQyxJQUFsQjs7QUFFQSxrQ0FBZ0IsSUFBaEIsRUFBc0JMLGFBQXRCOztBQUVBLFNBQUssSUFBSU0sT0FBT0MsVUFBVUMsTUFBckIsRUFBNkJDLE9BQU9DLE1BQU1KLElBQU4sQ0FBcEMsRUFBaURLLE9BQU8sQ0FBN0QsRUFBZ0VBLE9BQU9MLElBQXZFLEVBQTZFSyxNQUE3RSxFQUFxRjtBQUNuRkYsV0FBS0UsSUFBTCxJQUFhSixVQUFVSSxJQUFWLENBQWI7QUFDRDs7QUFFRCxXQUFPTixRQUFRRixTQUFTQyxRQUFRLHlDQUEyQixJQUEzQixFQUFpQyxDQUFDRixPQUFPRixjQUFjWSxTQUFkLElBQTJCLDhCQUF1QlosYUFBdkIsQ0FBbkMsRUFBMEVhLElBQTFFLENBQStFQyxLQUEvRSxDQUFxRlosSUFBckYsRUFBMkYsQ0FBQyxJQUFELEVBQU9hLE1BQVAsQ0FBY04sSUFBZCxDQUEzRixDQUFqQyxDQUFSLEVBQTJKTCxLQUFwSyxHQUE0S0EsTUFBTVksS0FBTixHQUFjO0FBQ3ZNQyxhQUFPLEVBRGdNO0FBRXZNQyxjQUFRLEVBRitMO0FBR3ZNQyxjQUFRLEVBSCtMO0FBSXZNQyxjQUFRLEVBSitMO0FBS3ZNQyxjQUFRLEVBTCtMO0FBTXZNQyxjQUFRLEVBTitM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b0JBQVV4QyxZQURhO0FBRXZCeUMsc0JBQVk7QUFGVztBQUEzQixPQUZGLEVBT0UsVUFQRixDQTNHRixDQWpCRixDQTdNRixDQVJGLENBUEYsQ0FSSyxDQUFQO0FBK1dEO0FBcFgwQixHQUFELENBQTVCOztBQXVYQSxTQUFPeEMsYUFBUDtBQUNELENBcmVtQixrQkFBcEI7O2tCQXVlZUEsYTs7QUFFZjtBQUNBOztBQUVBIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX09iamVjdCRnZXRQcm90b3R5cGVPZiBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfanN4RmlsZU5hbWUgPSAnQzpcXFxcVXNlcnNcXFxcRGFuXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcd2FsbGV0XFxcXGNyeXB0by13YWxsZXRcXFxccGFnZXNcXFxcaW5kZXguanM/ZW50cnknO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0sIElucHV0LCBDYXJkLCBCdXR0b24sIEdyaWQsIE1lc3NhZ2UsIENvbnRhaW5lciwgRHJvcGRvd24sIEljb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0U2VhcmNoJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xuLy9pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuLy9pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNoYXBlc2hpZnQgZnJvbSAnc2hhcGVzaGlmdC5pbyc7XG4vL3ZhciBQcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKVxuLy92YXIgc2hhcGVzaGlmdCA9IFByb21pc2UucHJvbWlzaWZ5QWxsKHJlcXVpcmUoJ3NoYXBlc2hpZnQuaW8nKSlcblxuLy8gY2xhc3MgYmFzZWQgY29tcG9uZW50XG5cbnZhciBDYW1wYWlnbkluZGV4ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENhbXBhaWduSW5kZXgsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENhbXBhaWduSW5kZXgoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbXBhaWduSW5kZXgpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IENhbXBhaWduSW5kZXguX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoQ2FtcGFpZ25JbmRleCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgaW5wdXQxOiAnJyxcbiAgICAgIGlucHV0MjogJycsXG4gICAgICBpbnB1dDM6ICcnLFxuICAgICAgaW5wdXQ0OiAnJyxcbiAgICAgIGlucHV0NTogJycsXG4gICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgY29udmVyc2lvbjogJycsXG4gICAgICBwYWlyczogJydcbiAgICB9LCBfdGhpcy5yZW5kZXJDYW1wYWlnbnMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCBlcnJvck1lc3NhZ2U6ICcnLCBjb252ZXJzaW9uOiAnJyB9KTtcblxuICAgICAgLypcclxuICAgICAgY29uc3QgdGVzdHkgPSBzaGFwZXNoaWZ0LmNvaW5zKChlcnIsIGNvaW5EYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvaW5MaXN0OiBKU09OLnN0cmluZ2lmeShPYmplY3QudmFsdWVzKGNvaW5EYXRhKSl9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb2luRGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgICovXG5cbiAgICAgIHZhciBwYWlyID0gX3RoaXMuc3RhdGUuaW5wdXQxICsgXCJfXCIgKyBfdGhpcy5zdGF0ZS5pbnB1dDI7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHsgcGFpcnM6IHBhaXIgfSk7XG5cbiAgICAgIHZhciBleGNoYW5nZSA9IHNoYXBlc2hpZnQuZXhjaGFuZ2VSYXRlKHBhaXIsIGZ1bmN0aW9uIChlcnIsIHJhdGUpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB2YWx1ZTogcmF0ZSB9KTtcbiAgICAgICAgcmV0dXJuIHJhdGU7IC8vID0+ICcxNTguNzE4MTUyODcnXG4gICAgICB9KTtcblxuICAgICAgdmFyIHJlZm9ybWF0ID0gXCIgXCIgKyBfdGhpcy5zdGF0ZS5pbnB1dDIgKyBcIiA9IDEgXCIgKyBfdGhpcy5zdGF0ZS5pbnB1dDE7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGNvbnZlcnNpb246IHJlZm9ybWF0IH0pO1xuXG4gICAgICAvL3RoaXMuc2V0U3RhdGUoeyB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoZXhjaGFuZ2UpIH0pO1xuXG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgeyBjb250ZW50OiBleGNoYW5nZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IDU3XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy9bXCJCVENcIixcIjFTVFwiLFwiQU5UXCIsXCJCTlRcIixcIkJDSFwiLFwiQlRHXCIsXCJCTEtcIixcIkNWQ1wiLFwiQ0xBTVwiLFwiREFTSFwiLFwiRENSXCIsXCJER0JcIixcIkROVFwiLFwiRE9HRVwiLFwiRVRIXCIsXCJFVENcIixcIkZDVFwiLFwiR0FNRVwiLFwiR05UXCIsXCJHVVBcIixcIktNRFwiLFwiTEJDXCIsXCJMU0tcIixcIkxUQ1wiLFwiTUFJRFwiLFwiTU9OQVwiLFwiTVNDXCIsXCJORU9cIixcIk5CVFwiLFwiTk1DXCIsXCJYRU1cIixcIk5NUlwiLFwiTlZDXCIsXCJOWFRcIixcIk9NR1wiLFwiUE9UXCIsXCJQUENcIixcIlFUVU1cIixcIlJFUFwiLFwiUkREXCIsXCJSQ05cIixcIlJMQ1wiLFwiU0FMVFwiLFwiU0NcIixcIlNOVFwiLFwiU1RPUkpcIixcIlNUQVJUXCIsXCJTVEVFTVwiLFwiU1dUXCIsXCJUUlNUXCIsXCJVU0RUXCIsXCJWT1hcIixcIlZSQ1wiLFwiVlRDXCIsXCJXSU5HU1wiLFwiWE1SXCIsXCJYUlBcIixcIlpFQ1wiLFwiWlJYXCJdXG4gICAgfSwgX3RoaXMuaGFuZGxlRHJvcGRvd24gPSBmdW5jdGlvbiAoZSwgZGF0YSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBpbnB1dDE6IGRhdGEudmFsdWUudG9Mb3dlckNhc2UoKSB9KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVEcm9wZG93bjIgPSBmdW5jdGlvbiAoZSwgZGF0YSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBpbnB1dDI6IGRhdGEudmFsdWUudG9Mb3dlckNhc2UoKSB9KTtcbiAgICB9LCBfdGhpcy5jb252ZXJ0Q29pbnMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHZhciB3aXRoZHJhd2FsQWRkcmVzcyA9IF90aGlzLnN0YXRlLmlucHV0NDtcbiAgICAgIHZhciBwYWlyID0gX3RoaXMuc3RhdGUucGFpcnM7XG4gICAgICB2YXIgYW1vdW50ID0gX3RoaXMuc3RhdGUuaW5wdXQ1OyAvLyBMVEMgYW1vdW50IHRoYXQgeW91IHdhbnQgdG8gcmVjZWl2ZSB0byB5b3VyIExUQyBhZGRyZXNzXG5cbiAgICAgIC8vIGlmIHNvbWV0aGluZyBmYWlsc1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIHJldHVybkFkZHJlc3M6IF90aGlzLnN0YXRlLmlucHV0MyxcbiAgICAgICAgYW1vdW50OiBfdGhpcy5zdGF0ZS5pbnB1dDUgLy8gPC0tLS0gbXVzdCBzZXQgYW1vdW50IGhlcmVcbiAgICAgIH07XG5cbiAgICAgIHNoYXBlc2hpZnQuc2hpZnQod2l0aGRyYXdhbEFkZHJlc3MsIHBhaXIsIG9wdGlvbnMsIGZ1bmN0aW9uIChlcnIsIHJldHVybkRhdGEpIHtcbiAgICAgICAgLy8gU2hhcGVTaGlmdCBvd25lZCBCVEMgYWRkcmVzcyB0aGF0IHlvdSBzZW5kIHlvdXIgQlRDIHRvXG4gICAgICAgIHZhciBkZXBvc2l0QWRkcmVzcyA9IHJldHVybkRhdGEuZGVwb3NpdDtcblxuICAgICAgICAvLyBOT1RFOiBgZGVwb3NpdEFtb3VudGAsIGBleHBpcmF0aW9uYCwgYW5kIGBxdW90ZWRSYXRlYCBhcmUgb25seSByZXR1cm5lZCBpZlxuICAgICAgICAvLyB5b3Ugc2V0IGBvcHRpb25zLmFtb3VudGBcblxuICAgICAgICAvLyBhbW91bnQgdG8gc2VuZCB0byBTaGFwZVNoaWZ0ICh0eXBlIHN0cmluZylcbiAgICAgICAgdmFyIHNoaWZ0QW1vdW50ID0gcmV0dXJuRGF0YS5kZXBvc2l0QW1vdW50O1xuXG4gICAgICAgIC8vIFRpbWUgYmVmb3JlIHJhdGUgZXhwaXJlcyAodHlwZSBudW1iZXIsIHRpbWUgZnJvbSBlcG9jaCBpbiBzZWNvbmRzKVxuICAgICAgICB2YXIgZXhwaXJhdGlvbiA9IG5ldyBEYXRlKHJldHVybkRhdGEuZXhwaXJhdGlvbiAqIDEwMDApO1xuXG4gICAgICAgIC8vIHJhdGUgb2YgZXhjaGFuZ2UsIDEgQlRDIGZvciA/Pz8gTFRDICh0eXBlIHN0cmluZylcbiAgICAgICAgdmFyIHJhdGUgPSByZXR1cm5EYXRhLnF1b3RlZFJhdGU7XG5cbiAgICAgICAgLy8geW91IG5lZWQgdG8gYWN0dWFsbHkgdGhlbiBzZW5kIHlvdXIgQlRDIHRvIFNoYXBlU2hpZnRcbiAgICAgICAgLy8geW91IGNvdWxkIHVzZSBtb2R1bGUgYHNwZW5kYDogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvc3BlbmRcbiAgICAgICAgLy8gQ09OVkVSVCBBTU9VTlQgVE8gU0FUT1NISVMgSUYgWU9VIFVTRUQgYHNwZW5kYFxuICAgICAgICAvLyBzcGVuZChTU19CVENfV0lGLCBkZXBvc2l0QWRkcmVzcywgc2hpZnRBbW91bnRTYXRvc2hpcywgZnVuY3Rpb24gKGVyciwgdHhJZCkgeyAvLi4gLi4vIH0pXG5cbiAgICAgICAgLy8gbGF0ZXIsIHlvdSBjYW4gdGhlbiBjaGVjayB0aGUgZGVwb3NpdCBzdGF0dXNcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcblxuICAgICAgICBzaGFwZXNoaWZ0LnN0YXR1cyhkZXBvc2l0QWRkcmVzcywgZnVuY3Rpb24gKGVyciwgc3RhdHVzLCBkYXRhKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMpOyAvLyA9PiBzaG91bGQgYmUgJ3JlY2VpdmVkJyBvciAnY29tcGxldGUnXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICAvL2R5bmFtaWNhbGx5IGNvbXB1dGUgcm91dGUgZm9yIGRlc2NyaXB0aW9uIHRhZyBiZWxvd1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENhbXBhaWduSW5kZXgsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBMYXlvdXQsXG4gICAgICAgIHtcbiAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDExOFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IHN0eWxlOiB7IG1hcmdpblRvcDogJzI1cHgnIH0sIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDExOVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEdyaWQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMjNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIEdyaWQuUm93LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMjVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgR3JpZC5Db2x1bW4sXG4gICAgICAgICAgICAgICAgeyB3aWR0aDogNywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTI2XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgJ2gzJyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEyN1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgJ0NoZWNrIEV4Y2hhbmdlIFJhdGUnXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgRm9ybSxcbiAgICAgICAgICAgICAgICAgIHsgb25TdWJtaXQ6IHRoaXMucmVuZGVyQ2FtcGFpZ25zLCBlcnJvcjogISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEyOFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgRm9ybS5GaWVsZCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTI5XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTMwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAnRnJvbSBDb2luIDEnXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcGRvd24sIHtcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1N0YXJ0aW5nIENvaW4nLCBzZWFyY2g6IHRydWUsIHNlbGVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbeyBcInRleHRcIjogXCJCaXRjb2luXCIsIFwia2V5XCI6IFwiQlRDXCIsIFwidmFsdWVcIjogXCJCVENcIiB9LCB7IFwidGV4dFwiOiBcIkRBU0hcIiwgXCJrZXlcIjogXCJEQVNIXCIsIFwidmFsdWVcIjogXCJEQVNIXCIgfSwgeyBcInRleHRcIjogXCJFdGhlclwiLCBcImtleVwiOiBcIkVUSFwiLCBcInZhbHVlXCI6IFwiRVRIXCIgfSwgeyBcInRleHRcIjogXCJMaXRlY29pblwiLCBcImtleVwiOiBcIkxUQ1wiLCBcInZhbHVlXCI6IFwiTFRDXCIgfSwgeyBcInRleHRcIjogXCJPbWlzZUdvXCIsIFwia2V5XCI6IFwiT01HXCIsIFwidmFsdWVcIjogXCJPTUdcIiB9LCB7IFwidGV4dFwiOiBcIk1vbmVyb1wiLCBcImtleVwiOiBcIlhNUlwiLCBcInZhbHVlXCI6IFwiWE1SXCIgfSwgeyBcInRleHRcIjogXCJSaXBwbGVcIiwgXCJrZXlcIjogXCJYUlBcIiwgXCJ2YWx1ZVwiOiBcIlhSUFwiIH0sIHsgXCJ0ZXh0XCI6IFwiWkNhc2hcIiwgXCJrZXlcIjogXCJaRUNcIiwgXCJ2YWx1ZVwiOiBcIlpFQ1wiIH1dLFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZURyb3Bkb3duLFxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5zdGF0ZS5pbnB1dDEsXG4gICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMzFcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEzOVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2JyJywge1xuICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTQwXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE0MVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJ1RvIENvaW4gMidcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wZG93biwge1xuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnRGVzaXJlZCBDb2luJywgc2VhcmNoOiB0cnVlLCBzZWxlY3Rpb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW3sgXCJ0ZXh0XCI6IFwiQml0Y29pblwiLCBcImtleVwiOiBcIkJUQ1wiLCBcInZhbHVlXCI6IFwiQlRDXCIgfSwgeyBcInRleHRcIjogXCJEQVNIXCIsIFwia2V5XCI6IFwiREFTSFwiLCBcInZhbHVlXCI6IFwiREFTSFwiIH0sIHsgXCJ0ZXh0XCI6IFwiRXRoZXJcIiwgXCJrZXlcIjogXCJFVEhcIiwgXCJ2YWx1ZVwiOiBcIkVUSFwiIH0sIHsgXCJ0ZXh0XCI6IFwiTGl0ZWNvaW5cIiwgXCJrZXlcIjogXCJMVENcIiwgXCJ2YWx1ZVwiOiBcIkxUQ1wiIH0sIHsgXCJ0ZXh0XCI6IFwiT21pc2VHb1wiLCBcImtleVwiOiBcIk9NR1wiLCBcInZhbHVlXCI6IFwiT01HXCIgfSwgeyBcInRleHRcIjogXCJNb25lcm9cIiwgXCJrZXlcIjogXCJYTVJcIiwgXCJ2YWx1ZVwiOiBcIlhNUlwiIH0sIHsgXCJ0ZXh0XCI6IFwiUmlwcGxlXCIsIFwia2V5XCI6IFwiWFJQXCIsIFwidmFsdWVcIjogXCJYUlBcIiB9LCB7IFwidGV4dFwiOiBcIlpDYXNoXCIsIFwia2V5XCI6IFwiWkVDXCIsIFwidmFsdWVcIjogXCJaRUNcIiB9XSxcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVEcm9wZG93bjIsXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLnN0YXRlLmlucHV0MixcbiAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE0MlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lc3NhZ2UsIHsgZXJyb3I6IHRydWUsIGhlYWRlcjogJ09vcHMhJywgY29udGVudDogdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNTFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgIHsgcHJpbWFyeTogdHJ1ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNTJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdHZXQgUmF0ZSEnXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdicicsIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE1NFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTU1XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnYicsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE1NlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ0V4Y2hhbmdlIFJhdGU6IFxcdTIwMDInXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29udmVyc2lvblxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEdyaWQuQ29sdW1uLFxuICAgICAgICAgICAgICAgIHsgd2lkdGg6IDIsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE2NFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBtYXJnaW5MZWZ0OiAnMjVweCcgfSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE2NVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNjZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdicicsIHtcbiAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE2N1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge1xuICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTY4XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnInLCB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNjlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE2OVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2JyJywge1xuICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTcwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNzFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdicicsIHtcbiAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE3MlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBuYW1lOiAnYW5nbGUgZG91YmxlIHJpZ2h0Jywgc2l6ZTogJ2h1Z2UnLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTczXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEdyaWQuQ29sdW1uLFxuICAgICAgICAgICAgICAgIHsgd2lkdGg6IDcsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE4MVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdoMycsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxODJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICdDb252ZXJ0IENvaW5zJ1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIEZvcm0sXG4gICAgICAgICAgICAgICAgICB7IG9uU3VibWl0OiB0aGlzLmNvbnZlcnRDb2lucywgZXJyb3I6ICEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxODNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIEZvcm0uRmllbGQsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE4NFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE4NVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJ0NvaW4gMSBXYWxsZXQgQWRkcmVzcydcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmlucHV0MyxcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuc2V0U3RhdGUoeyBpbnB1dDM6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTg2XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxOTJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdicicsIHtcbiAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE5M1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxOTRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICdDb2luIDIgV2FsbGV0IEFkZHJlc3MnXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5pbnB1dDQsXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlKHsgaW5wdXQ0OiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE5NVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge1xuICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjAyXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnInLCB7XG4gICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMDNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjA0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAnQW1vdW50IHRvIGNvbnZlcnQnXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5zdGF0ZS5pbnB1dDEsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5pbnB1dDUsXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlKHsgaW5wdXQ1OiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIwNVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lc3NhZ2UsIHsgZXJyb3I6IHRydWUsIGhlYWRlcjogJ09vcHMhJywgY29udGVudDogdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMTZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgIHsgcHJpbWFyeTogdHJ1ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMTdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdDb252ZXJ0ISdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENhbXBhaWduSW5kZXg7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7XG5cbi8vIE5leHQgYWxzbyByZXF1aXJlcyByZWFjdCBjb21wb25lbnQgdG8gYmUgZXhwb3J0ZWQgZm9yIGVhY2ggd2VwIHBhZ2UgZmlsZSxcbi8vIGFzIHNlZW4gb24gbGluZSAxN1xuXG4vL25wbSBydW4gZGV2ID0+IHN0YXJ0cyB3ZWIgYXBwIl19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25JbmRleCIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwidmFsdWUiLCJpbnB1dDEiLCJpbnB1dDIiLCJpbnB1dDMiLCJpbnB1dDQiLCJpbnB1dDUiLCJlcnJvck1lc3NhZ2UiLCJjb252ZXJzaW9uIiwicGFpcnMiLCJyZW5kZXJDYW1wYWlnbnMiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJwYWlyIiwiZXhjaGFuZ2UiLCJleGNoYW5nZVJhdGUiLCJlcnIiLCJyYXRlIiwicmVmb3JtYXQiLCJjcmVhdGVFbGVtZW50IiwiY29udGVudCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiaGFuZGxlRHJvcGRvd24iLCJlIiwiZGF0YSIsInRvTG93ZXJDYXNlIiwiaGFuZGxlRHJvcGRvd24yIiwiY29udmVydENvaW5zIiwid2l0aGRyYXdhbEFkZHJlc3MiLCJhbW91bnQiLCJvcHRpb25zIiwicmV0dXJuQWRkcmVzcyIsInNoaWZ0IiwicmV0dXJuRGF0YSIsImRlcG9zaXRBZGRyZXNzIiwiZGVwb3NpdCIsInNoaWZ0QW1vdW50IiwiZGVwb3NpdEFtb3VudCIsImV4cGlyYXRpb24iLCJEYXRlIiwicXVvdGVkUmF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJrZXkiLCJyZW5kZXIiLCJfdGhpczIiLCJzdHlsZSIsIm1hcmdpblRvcCIsIlJvdyIsIkNvbHVtbiIsIndpZHRoIiwib25TdWJtaXQiLCJlcnJvciIsIkZpZWxkIiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJzZWxlY3Rpb24iLCJvbkNoYW5nZSIsImRlZmF1bHRWYWx1ZSIsImhlYWRlciIsInByaW1hcnkiLCJtYXJnaW5MZWZ0IiwibmFtZSIsInNpemUiLCJ0YXJnZXQiLCJsYWJlbCIsImxhYmVsUG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7OztBQVBBLElBQUlBLGVBQWUsaUZBQW5CO0FBS0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLElBQUlDLGdCQUFnQixVQUFVQyxVQUFWLEVBQXNCO0FBQ3hDLDBCQUFVRCxhQUFWLEVBQXlCQyxVQUF6Qjs7QUFFQSxXQUFTRCxhQUFULEdBQXlCO0FBQ3ZCLFFBQUlFLElBQUo7O0FBRUEsUUFBSUMsS0FBSixFQUFXQyxLQUFYLEVBQWtCQyxJQUFsQjs7QUFFQSxrQ0FBZ0IsSUFBaEIsRUFBc0JMLGFBQXRCOztBQUVBLFNBQUssSUFBSU0sT0FBT0MsVUFBVUMsTUFBckIsRUFBNkJDLE9BQU9DLE1BQU1KLElBQU4sQ0FBcEMsRUFBaURLLE9BQU8sQ0FBN0QsRUFBZ0VBLE9BQU9MLElBQXZFLEVBQTZFSyxNQUE3RSxFQUFxRjtBQUNuRkYsV0FBS0UsSUFBTCxJQUFhSixVQUFVSSxJQUFWLENBQWI7QUFDRDs7QUFFRCxXQUFPTixRQUFRRixTQUFTQyxRQUFRLHlDQUEyQixJQUEzQixFQUFpQyxDQUFDRixPQUFPRixjQUFjWSxTQUFkLElBQTJCLDhCQUF1QlosYUFBdkIsQ0FBbkMsRUFBMEVhLElBQTFFLENBQStFQyxLQUEvRSxDQUFxRlosSUFBckYsRUFBMkYsQ0FBQyxJQUFELEVBQU9hLE1BQVAsQ0FBY04sSUFBZCxDQUEzRixDQUFqQyxDQUFSLEVBQTJKTCxLQUFwSyxHQUE0S0EsTUFBTVksS0FBTixHQUFjO0FBQ3ZNQyxhQUFPLEVBRGdNO0FBRXZNQyxjQUFRLEVBRitMO0FBR3ZNQyxjQUFRLEVBSCtMO0FBSXZNQyxjQUFRLEVBSitMO0FBS3ZNQyxjQUFRLEVBTCtMO0FBTXZNQyxjQUFRLEVBTitM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UnlDLHNCQUFZO0FBRko7QUFMZSxPQUEzQixDQWxERixFQTRERSxnQkFBTUosYUFBTixDQUFvQixPQUFwQixFQUE2QjtBQUMzQkUsa0JBQVU7QUFDUkMsb0JBQVV4QyxZQURGO0FBRVJ5QyxzQkFBWTtBQUZKO0FBRGlCLE9BQTdCLENBNURGLEVBa0VFLGdCQUFNSixhQUFOLENBQW9CLElBQXBCLEVBQTBCO0FBQ3hCRSxrQkFBVTtBQUNSQyxvQkFBVXhDLFlBREY7QUFFUnlDLHNCQUFZO0FBRko7QUFEYyxPQUExQixDQWxFRixFQXdFRSxnQkFBTUosYUFBTixDQUNFLE9BREYsRUFFRTtBQUNFRSxrQkFBVTtBQUNSQyxvQkFBVXhDLFlBREY7QUFFUnlDLHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUUsbUJBUkYsQ0F4RUYsRUFrRkUsZ0JBQU1KLGFBQU4seUJBQTJCO0FBQ3pCaUQsZUFBTyxLQUFLckUsS0FBTCxDQUFXRSxNQURPO0FBRXpCb0UsdUJBQWUsT0FGVTtBQUd6QnJFLGVBQU8sS0FBS0QsS0FBTCxDQUFXTSxNQUhPO0FBSXpCdUQsa0JBQVUsU0FBU0EsUUFBVCxDQUFrQmxELEtBQWxCLEVBQXlCO0FBQ2pDLGlCQUFPc0MsT0FBT3BDLFFBQVAsQ0FBZ0IsRUFBRVAsUUFBUUssTUFBTXlELE1BQU4sQ0FBYW5FLEtBQXZCLEVBQWhCLENBQVA7QUFDRCxTQU53QjtBQU96QnFCLGtCQUFVO0FBQ1JDLG9CQUFVeEMsWUFERjtBQUVSeUMsc0JBQVk7QUFGSjtBQVBlLE9BQTNCLENBbEZGLENBUEYsRUFzR0UsZ0JBQU1KLGFBQU4sMkJBQTZCLEVBQUVvQyxPQUFPLElBQVQsRUFBZU8sUUFBUSxPQUF2QixFQUFnQzFDLFNBQVMsS0FBS3JCLEtBQUwsQ0FBV08sWUFBcEQsRUFBa0VlLFVBQVU7QUFDckdDLG9CQUFVeEMsWUFEMkY7QUFFckd5QyxzQkFBWTtBQUZ5RjtBQUE1RSxPQUE3QixDQXRHRixFQTJHRSxnQkFBTUosYUFBTiwwQkFFRSxFQUFFNEMsU0FBUyxJQUFYLEVBQWlCMUMsVUFBVTtBQUN2QkMsb0JBQVV4QyxZQURhO0FBRXZCeUMsc0JBQVk7QUFGVztBQUEzQixPQUZGLEVBT0UsVUFQRixDQTNHRixDQWpCRixDQTdNRixDQVJGLENBUEYsQ0FSSyxDQUFQO0FBK1dEO0FBcFgwQixHQUFELENBQTVCOztBQXVYQSxTQUFPeEMsYUFBUDtBQUNELENBcmVtQixrQkFBcEI7O2tCQXVlZUEsYTs7QUFFZjtBQUNBOztBQUVBIiwiZmlsZSI6InVua25vd24ifQ==