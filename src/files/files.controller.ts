import {
  Controller,
  UseInterceptors,
  Post,
  Body,
  UploadedFile,
  ParseFilePipeBuilder,
  Get,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SampleDto } from './dto/sample.dto';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('files')
export class FilesController {
  @UseInterceptors(FileInterceptor('file'))
  @Post()
  uploadFile(
    @Body() body: SampleDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return {
      body,
      file: file.buffer.toString(),
    };
  }

  // response 返回
  // Content-Type:application/octet-stream
  @Get('stream')
  getFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    return new StreamableFile(file);
  }

  @Get('stream2')
  getFile2(@Res({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    // Content-Disposition 字段来指定浏览器如何处理该内容。
    // 常见的参数是 "attachment" 和 "filename"。
    // "attachment" 表示浏览器应该将该文件下载到本地，而不直接在浏览器中打开。
    // "filename" 参数可以设置下载文件的名称，使用户能够保存文件时使用一个特定的名称。
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="package.json"',
    });
    return new StreamableFile(file);
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('pass-validation')
  uploadFileAndPassValidation(
    @Body() body: SampleDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'json',
        })
        .build({
          fileIsRequired: false,
        }),
    )
    file?: Express.Multer.File,
  ) {
    return {
      body,
      file: file?.buffer.toString(),
    };
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('fail-validation')
  uploadFileAndFailValidation(
    @Body() body: SampleDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpg',
        })
        .build(),
    )
    file: Express.Multer.File,
  ) {
    return {
      body,
      file: file.buffer.toString(),
    };
  }
}
