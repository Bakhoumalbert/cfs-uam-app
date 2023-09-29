import { firebaseLogoutUser } from '@/api/authentication';
import { Box } from '@/ui/design-system/box/box'
import { Button } from '@/ui/design-system/button/button';
import { Typography } from '@/ui/design-system/typography/typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { ActiveLink } from './active-link';

export const UseAccountNavigation = () => {

    const router = useRouter()

  const handleLogoutUser = async () => {
    const { error } = await firebaseLogoutUser();

    if (error) {
      toast.error(error.message);
      return;
    }
    // @todo create user document
    toast.success("A bientôt sur le club Fédérateur des sciences de l'UAM ")
    router.push("/connexion")

  }

  return (
    <Box className="flex flex-col gap-7">
        <div className='flex flex-col gap-3'>
            <Typography variant='caption2' weight='medium'>
                <ActiveLink href='/mon-espace'>Mon compte</ActiveLink>
            </Typography>
            <Typography variant='caption2' weight='medium'>
                <ActiveLink href='/mon-compte/mes-projets'>Mes projets</ActiveLink>
            </Typography>
        </div>
        <div className="flex justify-center py-20">
            <Button action={handleLogoutUser} variant="danger">
                Déconnexion
            </Button>
        </div>
    </Box>
  )
}
