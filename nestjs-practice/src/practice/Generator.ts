import { Module } from '@nestjs/common';
import { MethodGenerator } from './MethodGenerator';

// console.log('*** GeneratorPractice ***');

@Module({
  imports: [MethodGenerator],
})
export class GeneratorPractice {}
