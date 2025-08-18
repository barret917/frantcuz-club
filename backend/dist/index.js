"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const zones_1 = __importDefault(require("./routes/zones"));
const menu_1 = __importDefault(require("./routes/menu"));
const billiards_1 = __importDefault(require("./routes/billiards"));
const karaoke_1 = __importDefault(require("./routes/karaoke"));
const banquet_requests_1 = __importDefault(require("./routes/banquet-requests"));
const tables_1 = __importDefault(require("./routes/tables"));
const zones_2 = __importDefault(require("./routes/zones"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3003;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
// Routes
app.use('/api/zones', zones_1.default);
app.use('/api/zones-management', zones_2.default);
app.use('/api', menu_1.default);
app.use('/api/billiards', billiards_1.default);
app.use('/api/karaoke', karaoke_1.default);
app.use('/api/banquet-requests', banquet_requests_1.default);
app.use('/api', tables_1.default);
// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Frantsuz Club API is running' });
});
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
    console.log(`🔗 API base URL: http://localhost:${PORT}/api`);
});
//# sourceMappingURL=index.js.map