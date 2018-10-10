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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sc-nlopez-osx/kickStart/pages/campaigns/show.js?entry';


var CampaignShow = function (_React$Component) {
    (0, _inherits3.default)(CampaignShow, _React$Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                minimumContribution = _props.minimumContribution,
                balance = _props.balance,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount,
                manager = _props.manager;

            var items = [{
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw money',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumContribution,
                meta: "Minimum Contribution (wei)",
                description: "You must contribute al least this much wei to become approver"
            }, {
                header: requestsCount,
                meta: "Number of Requests",
                description: "A request tries to withdraw money from the contract."
            }, {
                header: approversCount,
                meta: "Number of Approvers",
                description: "Numbner of people have already donated to this campaign"
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: "Campaign Balance (ether)",
                description: "The balance is how much money this campaign has left to spend"
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Campaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address, //campaign address
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react2.default.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImJhbGFuY2UiLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUSxBQUFLOztBQUNiLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7Ozs7Ozs7SSxBQUdyQjs7Ozs7Ozs7Ozs7c0NBaUJXO3lCQU1NLEtBTk4sQUFNVztnQkFOWCxBQUVELDZCQUZDLEFBRUQ7Z0JBRkMsQUFHTCxpQkFISyxBQUdMO2dCQUhLLEFBSUwsdUJBSkssQUFJTDtnQkFKSyxBQUtMLHdCQUxLLEFBS0w7Z0JBTEssQUFNTCxpQkFOSyxBQU1MLEFBRUo7O2dCQUFNO3dCQUNGLEFBQ1csQUFDUDtzQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFHZ0IsQUFDWjt1QkFBTSxFQUFDLGNBTEQsQUFDVixBQUlVLEFBQWM7QUFKeEIsQUFDSSxhQUZNO3dCQU9WLEFBQ1csQUFDUDtzQkFGSixBQUVTLEFBQ0w7NkJBVk0sQUFPVixBQUdnQjtBQUhoQixBQUNJO3dCQUlKLEFBQ1csQUFDUDtzQkFGSixBQUVTLEFBQ0w7NkJBZk0sQUFZVixBQUdnQjtBQUhoQixBQUNJO3dCQUlKLEFBQ1csQUFDUDtzQkFGSixBQUVTLEFBQ0w7NkJBcEJNLEFBaUJWLEFBR2dCO0FBSGhCLEFBQ0k7d0JBTU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDlCLEFBQ1csQUFBMkIsQUFDbEM7c0JBRkosQUFFUyxBQUNMOzZCQTFCUixBQUFjLEFBdUJWLEFBR2dCLEFBSXBCO0FBUEksQUFDSTs7aURBTUQsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHSCxBQUVKOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFFQSxrQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNLO0FBREw7b0JBREosQUFDSSxBQUNLLEFBQUssQUFHVixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBVmhCLEFBQ0ksQUFHSSxBQUtJLEFBQ0ksQUFXbkI7QUFYbUI7Ozs7OztpSCxBQXBFUzs7Ozs7aUNBQ25CO0EsMkNBQVcsd0JBQVMsTUFBQSxBQUFNLE0sQUFBZixBQUFxQjs7dUNBRWhCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCLEE7O2lDQUE5QztBOzs2Q0FHTSxNQUFBLEFBQU0sTUFEWCxBQUNpQixTQUFVLEFBQzlCO3lEQUFvQixRQUZqQixBQUVpQixBQUFRLEFBQzVCOzZDQUFRLFFBSEwsQUFHSyxBQUFRLEFBQ2hCO21EQUFjLFFBSlgsQUFJVyxBQUFRLEFBQ3RCO29EQUFlLFFBTFosQUFLWSxBQUFRLEFBQ3ZCOzZDQUFRLFFBTkwsQUFNSyxBQUFRLEE7QUFOYixBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBUmUsZ0JBQU0sQSxBQW9GakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2MtbmxvcGV6LW9zeC9raWNrU3RhcnQifQ==