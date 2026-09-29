import DesignCanvas from '@/components/layout/DesignCanvas'
import GridBackdrop from '@/components/layout/GridBackdrop'
import Button from '@/components/ui/Button'
import Ornament from '@/components/ui/Ornament'
import { ctaOrnaments } from '../data'

export default function CreatorCtaSection() {
  return (
    <section className="relative h-[488px] overflow-hidden bg-persian-blue-800">
      <GridBackdrop />

      <div className="relative flex h-full items-center justify-center pt-px">
        <div className="flex w-[964px] flex-col items-center gap-10 text-center text-shuttle-gray-50">
          <h2 className="w-[710px] font-heading text-heading-m font-semibold">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="text-body-l">
            Experience the collaboration of numerous creators and an expanding selection of
            courses. Register now and become a part of a community comprising over 10,000 local and
            international creators. Utilize our Course Editor, and showcase your expertise by
            publishing your finest course on the ByteSpace Course Library.
          </p>
          <Button>Join as Creator</Button>
        </div>
      </div>

      <DesignCanvas>
        {ctaOrnaments.map((ornament, index) => (
          <Ornament key={index} {...ornament} />
        ))}
      </DesignCanvas>
    </section>
  )
}
