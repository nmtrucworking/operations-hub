import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuditModule } from "../audit/audit.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PasswordService } from "./password.service";

@Module({
  imports: [JwtModule.register({}), AuditModule],
  controllers: [AuthController],
  providers: [AuthService, PasswordService],
  exports: [JwtModule, AuthService, PasswordService]
})
export class AuthModule {}
