'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

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