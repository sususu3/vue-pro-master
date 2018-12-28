import appConfig from '../../config/index'

export default {
    sayHelloWorld: appConfig.apiBaseUrl + '/hello',
    // getLStatus:appConfig.apiBaseUrl + '/status'
}
