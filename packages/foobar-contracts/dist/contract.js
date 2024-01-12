"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contract = exports.DoStuffResponse = exports.DoStuffRequest = void 0;
class DoStuffRequest {
    id;
}
exports.DoStuffRequest = DoStuffRequest;
class DoStuffResponse {
    result;
}
exports.DoStuffResponse = DoStuffResponse;
exports.contract = {
    name: "ContractFoobar",
    methods: {
        doStuff: {
            request: DoStuffRequest,
            response: DoStuffResponse,
        },
    },
};
