import { Body, Controller, Get, Param, Res, Post, Query } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiProperty,
} from "@nestjs/swagger";
import { MessagesService } from "./messages.service";
import { connect } from "http2";
import { BasicMessageRecord } from "@aries-framework/core/build/modules/basic-messages/repository/BasicMessageRecord";
import { SendMessageDto } from "./dto/sendmessage.dto";
import { MessagesEntity } from "./entities/messages.entity";
import { BasicMessagesApi } from "@aries-framework/core/build/modules/basic-messages/BasicMessagesApi";
//import { BasicMessageRecord } from '@aries-framework/core';
//import { Controller } from '@nestjs/common';

@Controller("Messages")
export class MessagesController {
  basicMessage: any;
  constructor(private readonly messagesService: MessagesService) {}
  //under get
  // findAll(@Req() request: Request): string {
  //   return 'This action returns all cats';
  // }

  @ApiTags("messages")
  @Get()
  @ApiResponse({
    status: 200,
    description: "Here",
    type: String,
  })
  getHere(): String {
    return this.messagesService.getHere();
  }
  @ApiTags("Messages")
  @Post("/sendMessage")
  //@ApiOperation({ summary: "Send Message" })
  //@ApiResponse({ status: 200, description: "Message Sent", type: String })
  async sendMessage(
    @Body() sendMessage: SendMessageDto
  ): Promise<BasicMessageRecord | any> {
    console.log(sendMessage);
    try {
      return await this.messagesService.sendMessage(sendMessage);
    } catch (error) {
      throw new Error(`Failed to send message: ${error.message}`);
    }
  }
}
