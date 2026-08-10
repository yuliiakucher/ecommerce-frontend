import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';

function MenuItem({ link, text }: { link: string; text: string }) {
  return (
    <NavigationMenuItem className="text-lg font-semibold uppercase text-primary">
      <Link to={link}>{text}</Link>
    </NavigationMenuItem>
  );
}

function Nav() {
  const { t } = useTranslation();

  const links = [
    { link: '/', text: t('nav:menu.discover') },
    { link: '/products', text: t('nav:menu.products') },
    { link: '/orders', text: t('nav:menu.orders') },
    { link: '/', text: t('nav:menu.holidayPicks') },
  ];

  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <Link to="/">
        <img src="/img/logo.svg" alt="logo" className="w-52" />
      </Link>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-2">
          {links.map(({ link, text }) => (
            <MenuItem key={text} link={link} text={text} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label={t('nav:menu.openMenu')}>
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <NavigationMenu>
            <NavigationMenuList className="flex-col items-start gap-2 p-4">
              {links.map(({ link, text }) => (
                <MenuItem key={text} link={link} text={text} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Nav;