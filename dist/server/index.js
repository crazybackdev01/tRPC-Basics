"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("./trpc");
const trpc_2 = require("./trpc");
const zod_1 = __importDefault(require("zod"));
const standalone_1 = require("@trpc/server/adapters/standalone");
const todoInputType = zod_1.default.object({
    title: zod_1.default.string().min(4).max(50),
    description: zod_1.default.string().max(200).min(4),
});
const appRouter = (0, trpc_1.router)({
    createTodo: trpc_2.publicProcedure.input(todoInputType).mutation((opts) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Money");
        const { input } = opts;
        const title = input.title;
        const description = input.description;
        //DB logic
        return {
            id: "1",
        };
    })),
});
// Export type router type signature,
// NOT the router itself
const server = (0, standalone_1.createHTTPServer)({ router: appRouter });
server.listen(3000);
