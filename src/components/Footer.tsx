export default function Footer() {
  return (
    <div>
      <footer className='footer flex flex-col footer-center p-10 bg-base-200 text-base-content rounded'>
        <div>
          <div className='grid grid-flow-col gap-4 items-center'>
            <a
              className='link link-hover'
              href='https://gallery.theduckcreator.in.th'
            >
              <img src={`/tdcg-logo.png`} className='h-10 lg:h-16' />
            </a>
            <a className='link link-hover' href='https://theethawat.dev'>
              <img src={`/theethawat-logo.png`} className='h-10 lg:h-16' />
            </a>
            <a className='link link-hover' href='https://theduckcreator.in.th'>
              <img src={"tdc-logo.png"} className='h-12 lg:h-16' />
            </a>
          </div>
        </div>

        <div>
          <p>
            &copy; 2025 <strong>TDC Gallery</strong>,{" "}
            <strong>Theethawat</strong> & <strong>The Duck Creator</strong>{" "}
            Source Code Available on{" "}
            <a
              className='link'
              href='https://github.com/theethawat/tdc-collectibles-next'
            >
              GitHub
            </a>
            <br />
            Front Page Made by <a href='https://nextjs.org/'>Next.js </a>
            Server By{" "}
            <a className='link' href='https://openlandscape.cloud/'>
              Openlandscape Cloud
            </a>{" "}
            Image hosted In{" "}
            <a
              className='link'
              href='https://azure.microsoft.com/en-us/products/storage/blobs'
            >
              Azure Blob Storage
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
