webpackHotUpdate(5,{

/***/ 1191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(488);

var _campaign = __webpack_require__(1189);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(1014);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(885);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sc-nlopez-osx/kickStart/components/ContributeForm.js';


var ContributeForm = function (_React$Component) {
    (0, _inherits3.default)(ContributeForm, _React$Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            loading: false,
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                campaign = (0, _campaign2.default)(_this.props.address);

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaign.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 9:

                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address); //refresh the page

                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:

                                _this.setState({ loading: false, value: '' });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: this.state.errorMessage != '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                label: 'ether',
                labelPosition: 'right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, type: 'submit', loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Contribute')));
        }
    }]);

    return ContributeForm;
}(_react2.default.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVEsQUFBSyxBQUFNLEFBQVM7O0FBQzVCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFhOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7O2dPLEFBRUY7bUJBQU0sQUFDSSxBQUNOO3FCQUZFLEFBRU0sQUFDUjswQixBQUhFLEFBR1c7QUFIWCxBQUNGLGlCLEFBS0o7aUdBQVUsaUJBQUEsQUFBTyxPQUFQOzhCQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNOO3NDQUFBLEFBQU0sQUFFQTs7QUFIQSwyQ0FHVyx3QkFBUyxNQUFBLEFBQUssTUFIekIsQUFHVyxBQUFvQixBQUVyQzs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE1BQUssY0FMdEIsQUFLTixBQUFjLEFBQTJCOztnREFMbkM7Z0RBQUE7dUNBU3FCLGNBQUEsQUFBSyxJQVQxQixBQVNxQixBQUFTOztpQ0FBMUI7QUFUSixvREFBQTtnREFBQTtnREFVSSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7MENBQzNCLFNBRGdDLEFBQ2hDLEFBQVMsQUFDZDsyQ0FBTyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BWnJDLEFBVUksQUFBbUMsQUFFOUIsQUFBa0M7QUFGSixBQUNyQyxpQ0FERTs7aUNBS047OytDQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQWZyQyxBQWVGLEFBQTZDLFVBZjNDLEFBZXNEOztnREFmdEQ7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBa0JGOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFhLFlBbEIxQixBQWtCRixBQUFjLEFBQW9COztpQ0FHdEM7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxPQUFNLE9BckJ2QixBQXFCTixBQUFjLEFBQXFCOztpQ0FyQjdCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBd0JGO3lCQUNMOzttQ0FBUSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBQWpELEFBQStEOzhCQUEvRDtnQ0FBQSxBQUNLO0FBREw7YUFBQSxrQkFDTSxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx5Q0FBQSxBQUFDO3VCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFBTyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU0sTUFBQSxBQUFNLE9BQWxDLEFBQU8sQUFBYyxBQUFvQjtBQUZ2RCxBQUdJO3VCQUhKLEFBR1UsQUFDTjsrQkFKSixBQUlrQjs7OEJBSmxCO2dDQUhULEFBQ0ssQUFFSSxBQU9KO0FBUEk7QUFDSSxpQ0FNUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsUUFBTyxTQUFTLEtBQUEsQUFBSyxNQUEzQyxBQUFpRDs4QkFBakQ7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLE1BQWhCLEFBQXFCLFVBQVMsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQUFBO0FBQUE7ZUFaakIsQUFBUSxBQVVLLEFBRUksQUFLbkI7Ozs7O0VBbER3QixnQkFBTSxBLEFBcURuQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2MtbmxvcGV6LW9zeC9raWNrU3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/sc-nlopez-osx/kickStart/components/ContributeForm.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sc-nlopez-osx/kickStart/components/ContributeForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iMjY2NGJmY2JhMTMxZjU2MDA3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcz9jNDk0MDBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Zvcm0sSW5wdXQsTWVzc2FnZSwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbidcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnLi4vcm91dGVzJ1xuXG5jbGFzcyBDb250cmlidXRlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAgIHN0YXRlPXtcbiAgICAgICAgdmFsdWU6JycsXG4gICAgICAgIGxvYWRpbmc6ZmFsc2UsXG4gICAgICAgIGVycm9yTWVzc2FnZTonJ1xuICAgIH1cblxuICAgIG9uU3VibWl0PSBhc3luYyAoZXZlbnQpID0+e1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlLGVycm9yTWVzc2FnZTonJ30pXG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgZnJvbTphY2NvdW50c1swXSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaSh0aGlzLnN0YXRlLnZhbHVlLCdldGhlcicpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApIC8vcmVmcmVzaCB0aGUgcGFnZVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvck1lc3NhZ2U6ZXJyb3IubWVzc2FnZX0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlLHZhbHVlOicnfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICByZXR1cm4gIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UhPScnfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QW1vdW50IHRvIENvbnRyaWJ1dGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50PT50aGlzLnNldFN0YXRlKHt2YWx1ZTpldmVudC50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV0aGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHNcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSB0eXBlPSdzdWJtaXQnIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlRm9ybTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBOztBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBQ0E7QUFJQTtBQUNBO0FBTkE7QUFBQTtBQVNBO0FBQ0E7QUFEQTtBQVRBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFoQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWtCQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBdEJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBT0E7QUFQQTtBQUNBOztBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTs7Ozs7QUFsREE7QUFDQTtBQW9EQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9