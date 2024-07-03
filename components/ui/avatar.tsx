import * as Avatar from '@radix-ui/react-avatar';

function AvatarDemo({ image }: { image: string }) {
  return <Avatar.Root className="inline-flex size-6 select-none items-center justify-center overflow-hidden rounded-full align-middle">
    <Avatar.Image
      className="h-full w-full rounded-[inherit] object-cover"
      src={image}
      alt="Colm Tuite"
    />
    <Avatar.Fallback
      className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-sm font-medium"
      delayMs={600}
    >
      HI
    </Avatar.Fallback>
  </Avatar.Root>
}

export default AvatarDemo;
