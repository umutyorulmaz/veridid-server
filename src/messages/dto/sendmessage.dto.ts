import { IsInt, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class SendMessageDto {
  @IsString()
  @ApiProperty({
    description: "Message content",
    example: "Hello, World!",
  })
  message: string;

  @IsString()
  @ApiProperty({
    description: "Connection ID",
    example: "1",
  })
  connectionId: string;
}
