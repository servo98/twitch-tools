"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const _controllers_1 = require("@controllers");
const router = (0, express_1.Router)();
router.post('v1/login', _controllers_1.authController.login);
exports.default = router;
