import { Container } from '@/ui/component/container/container'
import { Box } from '@/ui/design-system/box/box'
import { Typography } from '@/ui/design-system/typography/typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ForgetPasswordForm } from './forget-password.form'
import { FormType } from '@/types/forms'

interface Props{
    form: FormType;
}
  
export const ForgetPasswordView = ({ form }: Props) => {
  return (
        <Container className="grid grid-cols-2 gap-20 mb-32">
            <div className='flex items-center'>
                <div className='relative w-full h-[531px]'>
                    <Image fill priority src="/assets/svg/forget-password 2.svg" alt='welcome...' />
                </div>
            </div>
            <div className='flex items-center'>
                <Box padding_y='py-5'>
                    <div className='flex items-center justify-between'>
                        <Typography variant='h5' component='h1'>
                            Mots de passe perdu ?
                        </Typography>
                        <Typography variant='caption4' component='span' theme='primary'>
                            <Link href="/connexion">Connexion</Link>
                        </Typography>
                    </div>
                    <ForgetPasswordForm form={form} />
                </Box>
            </div>
        </Container>
    )
}

