import { BasicMessageStateChangedEvent } from "@aries-framework/core";
import { Inject, Injectable } from "@nestjs/common";
import { AfjService } from "../afj/afj.service";
import { BasicMessageStorageProps } from "@aries-framework/core/build/modules/basic-messages/repository";
import { BasicMessageRole } from "@aries-framework/core";
import { BasicMessageRecord } from "@aries-framework/core/build/modules/basic-messages/repository";
import { BasicMessageEventTypes } from "@aries-framework/core";
import { BasicMessage } from "@aries-framework/core";
import { BasicMessageService } from "@aries-framework/core";
import { SendMessageDto } from "./dto/sendmessage.dto";
import { MessagesEntity } from "./entities/messages.entity";
import { BasicMessagesApi } from "@aries-framework/core/build/modules/basic-messages/BasicMessagesApi";

@Injectable()
export class MessagesService {
  constructor(
    @Inject(AfjService /*ConnectionsService*/) private afjService: AfjService
  ) {}

  messagesEntity = new MessagesEntity();

  // setupMessageListener = () => {
  //   this.messagesEntity./* .. */ <BasicMessageStateChangedEvent>(
  //     BasicMessageEventTypes.BasicMessageStateChanged,
  //     ({ payload }) => {
  //       {
  //         message: BasicMessage;
  //         basicMessageRecord: BasicMessageRecord;
  //         //console.log("Message recieved", payload.basicMessageRecord);
  //       }
  //     }
  //   );
  // };

  //creating new message instance
  readonly basicMessage: any = new BasicMessage({
    content: "Anibal Coding",
    //id: "640fd0f7-9a3c-4c71-9c7c-e16a69e7746b",
  });

  // async BasicMessagesApi(): Promise<BasicMessageRecord | any> {
  //   this.basicMessage.sendMessage("Anibal Coding", "connectionId");
  // }
  async sendMessage(
    sendMessage: SendMessageDto
  ): Promise<BasicMessageRecord | any> {
    console.log("message", sendMessage.message);
    console.log("connectionId", sendMessage.connectionId);
    //this.setupMessageListener();
    let goodMessage =
      await this.afjService.afjAgent.agent.basicMessages.sendMessage(
        sendMessage.connectionId,
        sendMessage.message
      );

    return `Message ${this.basicMessage.content} sent`; /*this.basicMessage.sendMessage(connectionId, message);*/
  }
  //connection id creates problem here
  // async sendMessage(
  //   message: string,
  //   connectionId: string
  //   //date: Date,
  //   //_role: BasicMessageRole
  // ): Promise<BasicMessageRecord> {
  //   const basicMessage = new BasicMessage({
  //     content: message,
  //     //sentTime: date,
  //     id: connectionId,
  //   });

  //   return basicMessage;
  // }

  getHere(): String {
    return "Messages Test Module";
  }
}
