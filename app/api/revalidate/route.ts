import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import { verifyWebhookSignature } from '@hygraph/utils';

export type cmsSignatureProps = {
  operation: string;
  data: {
    __typename: string;
    id: string;
    stage: string;
  };
};
export async function POST(request: Request) {
  const body: cmsSignatureProps = await request.json();
  const secret = process.env.HYGRAPH_WEBHOOK!;
  const signature = request.headers.get('cms-signature')!;

  const isValid = verifyWebhookSignature({ body, signature, secret });

  if (!isValid) {
    return NextResponse.json({
      message: 'Autenticação Inválida',
    });
  }
  const name = body.data.__typename;
  revalidateTag(name);
  return NextResponse.json({
    message: `Cache de ${name} atualizado com sucesso!`,
  });
}
